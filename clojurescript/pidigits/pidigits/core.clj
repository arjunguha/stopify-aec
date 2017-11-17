;; The Computer Language Benchmarks Game
;; http://shootout.alioth.debian.org/

;; Based on the Racket version of the benchmark by Matthew Flatt
;;; contributed by PheliX

(ns pidigits.core
  (:require [clojure.core]))

(defn floor-ev [q r s t x]
  (quot (+ (* q x) r) (+ (* s x) t)))

(defn ncomp [q r s t q2 r2 s2 t2]
  [(+ (* q q2) (* r s2))
   (+ (* q r2) (* r t2))
   (+ (* s q2) (* t s2))
   (+ (* s r2) (* t t2))])

(defn digit [k q r s t n row col]
  (if (> n 0)
    (let [y (floor-ev q r s t 3)]
      (if (== y (floor-ev q r s t 4))
	(let [[q r s t] (ncomp 10 (* -10 y) 0 1 q r s t)]
	  (if (== col 10)
	    (let [row (+ row 10)]
	      (recur k q r s t (dec n) row 1))
	    (do
		(recur k q r s t (dec n) row (inc col)))))
	(let [[q r s t] (ncomp q r s t k (* 2 (inc (* 2 k))) 0 (inc (* 2 k)))]
	  (recur (inc k) q r s t n row col))))))

(defn -main[]
  (dotimes [_ 1000000]
  ;; attempting to compute > 46 digits hangs for some reason. Maybe
  ;; something overflows.
  (digit 1 1 0 0 1 5 0 0)))
