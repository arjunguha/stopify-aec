(ns collatz.core
  (:require [clojure.core]))

(defn cseq [n]
  (if (= 1 n)
    [1]
    (cons n (cseq (if (even? n)
                    (/ n 2)
                    (+ (* 3 n) 1 ))))))


(defn max-key-coll [k coll]
  (if-let [s (seq coll)]
    (loop [max-elem (first s)
           max-k (k max-elem)
           s (next s)]
      (if-let [s (seq s)]
        (let [next-elem (first s)
              next-elem-k (k next-elem)]
          (if (> next-elem-k max-k)
            (recur next-elem next-elem-k (next s))
            (recur max-elem max-k (next s))))
        ;; else
        max-elem))))

(defn -main []
  (let [maxn 100000]
    (max-key-coll count (map cseq (range 1 maxn)))))
