(ns meteor.macros)

;; Convenience function to calculate if a piece fits on the board.
;; Node 0 of the piece, at board index (indices 0), is assumed to be
;; on the board, but the other nodes may be off.

(defmacro node-fits [node-info indices ^objects oob-table]
  `(let [pair# ~node-info
         parent-node-num# (int (pair# 0))
         dir# (int (pair# 1))
         parent-idx# (int (~indices parent-node-num#))
         ;^booleans oob-for-parent-idx# (aget ~oob-table parent-idx#)]
         ^"[Z" oob-for-parent-idx# (aget ~oob-table parent-idx#)]
     (not (aget oob-for-parent-idx# dir#))))


;; first-empty-index-aux assumptions: idx is in the range [0,24].
;; half-board is an integer that has bits 25 and higher equal to 0, so
;; the loop is guaranteed to terminate, and the return value will be
;; in the range [0,25].

(defmacro first-empty-index-aux [idx half-board]
  `(loop [i# ~idx
          hb# (bit-shift-right ~half-board ~idx)]
     (if (zero? (bit-and hb# 1))
       i#
       (recur (inc i#) (bit-shift-right hb# 1)))))


(defmacro first-empty-index [idx board0 board1]
  `(if (< ~idx 25)
     (let [i# (first-empty-index-aux ~idx ~board0)]
       (if (== i# 25)
         (+ 25 (first-empty-index-aux 0 ~board1))
         i#))
     (+ 25 (first-empty-index-aux (- ~idx 25) ~board1))))

;; Assume all args have been type-hinted to int in the environment
;; where the macro board-has-no-islands is called.

(defmacro board-has-no-islands [board0 board1 index
                                ^longs bad-even-triples
                                ^longs bad-odd-triples]
  `(if (>= ~index 40)
     true
     (let [row-num# (long (/ ~index 5))
           current-3-rows#
           (case row-num#
                 0 (bit-and 0x7FFF ~board0)
                 1 (bit-and 0x7FFF (bit-shift-right ~board0 5))
                 2 (bit-and 0x7FFF (bit-shift-right ~board0 10))
                 3 (bit-or (bit-shift-right ~board0 15)
                           (bit-shift-left (bit-and 0x1F ~board1)
                                           10))
                 4 (bit-or (bit-shift-right ~board0 20)
                           (bit-shift-left (bit-and 0x3FF ~board1) 5))
                 5 (bit-and 0x7FFF ~board1)
                 6 (bit-and 0x7FFF (bit-shift-right ~board1 5))
                 7 (bit-and 0x7FFF (bit-shift-right ~board1 10)))
           int-num# (bit-shift-right current-3-rows# 5)
           bit-num# (bit-and current-3-rows# 0x1F)
           even-row# (zero? (bit-and row-num# 1))]
       (if even-row#
         (zero? (bit-and 1 (bit-shift-right (aget ~bad-even-triples int-num#)
                                            bit-num#)))
         (zero? (bit-and 1 (bit-shift-right (aget ~bad-odd-triples int-num#)
                                            bit-num#)))))))

