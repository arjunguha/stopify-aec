(ns memuse.core
  (:require [clojure.core]
            [cljx-sampling.random :as random]))

;;(set! *warn-on-reflection* true)

(def r (random/create :seed 1234567890))
(defn rands [] (repeatedly #(random/next-gaussian! r)))

(defn random-double-array [n]
  (let [n (int n)
        #^doubles a (double-array n)]
    (loop [i (int 0)]
      (if (< i n)
        (do
          (aset a i (random/next-gaussian! r))
          (recur (inc i)))
        a))))

(defn random-boxed-double-array [n]
  (let [n (int n)
        a (object-array n)]
    (loop [i (int 0)]
      (if (< i n)
        (do
          (aset a i (random/next-gaussian! r))
          (recur (inc i)))
        a))))

(defn random-long-array [n]
  (let [n (int n)
        #^longs a (long-array n)]
    (loop [i (int 0)]
      (if (< i n)
        (do
          (aset a i (random/next-int! r))
          (recur (inc i)))
        a))))

(defrecord Twod-point [x y])


;(defrecord Len-Meter [^int len])
;(def measure-len (constantly (Len-Meter. 1)))
;(def len-meter (meter measure-len
;                      (Len-Meter. 0)
;                      #(Len-Meter. (+ (:len %1) (:len %2)))))

(defn -main []
  (dotimes [_ 25000]
    (let [n 8]
      (let [list-of-stuff
            (list '(a)
                  (take n (rands))
                  (take n (partition 2 (rands)))
                  (vec (take n (rands)))
                  (vec (take n (partition 2 (rands))))
                  (vec (take n (map vec (partition 2 (rands)))))
                  (double-array n)
                  (take n (repeatedly (fn [] (double-array 2))))
                  (int-array n)
                  (take n (repeatedly (fn [] (int-array 2))))
                  (long-array n)
                  (take n (repeatedly (fn [] (long-array 2))))
                  (random-double-array n)
                  (take n (repeatedly (fn [] (random-double-array 2))))
                  (random-long-array n)
                  (take n (repeatedly (fn [] (random-long-array 2))))
                  (vec (take n (map (fn [[x y]] (Twod-point. x y))
                                    (partition 2 (rands)))))
                  (loop [s (sorted-set)
                         i (int n)]
                    (if (zero? i)
                      s
                      (recur (conj s
                                   (random/next-gaussian! r))
                             (dec i))))
                  (comment
                    (loop [s (finger-tree nil)
                           i (int n)]
                      (if (zero? i)
                        s
                        (recur (conjr s
                                      (random/next-gaussian! r))
                               (dec i))))
                    (let [half (double 0.5)]
                      (loop [s (finger-tree nil)
                             i (int n)]
                        (if (zero? i)
                          s
                          (let [x (random/next-gaussian! r)]
                            (recur (if (< x half)
                                     (conjr s x)
                                     (consl s x))
                                   (dec i))))))
                    (let [my-len-meter len-meter]
                      (loop [s (finger-tree my-len-meter)
                             i (int n)]
                        (if (zero? i)
                          s
                          (recur (conjr s
                                        (random/next-gaussian! r))
                                 (dec i)))))
                    )
                  (random-boxed-double-array n)
                  )]))))
