;; The Computer Language Benchmarks Game
;; http://shootout.alioth.debian.org/
;
;; contributed by Marko Kocic
;; Adapted from the Java -server version

(ns binarytrees.core
  (:require [cljs.core]
            [cljs.pprint :refer [cl-format]]))

(enable-console-print!)

(defrecord TreeNode [left right ^int item])

(defn bottom-up-tree [item depth]
  (if (> depth 0)
    (TreeNode.
     (bottom-up-tree (dec (* 2 item)) (dec depth))
     (bottom-up-tree (* 2 item) (dec depth))
     item)
    (TreeNode. nil nil item)))

(defn item-check [node]
  (if (nil? (:left node))
    (:item node)
    (+ (:item node) (item-check (:left node)) (- (item-check (:right node))))))

(defn iterate-trees [mx mn d]
  (let [iterations (bit-shift-left 1 (int (+ mx mn (- d))))]
    (reduce + (map (fn [i]
                     (+ (item-check (bottom-up-tree i d))
                        (item-check (bottom-up-tree (- i) d))))
                   (range 1 (inc iterations))))))

(dotimes [_ 1000]
  (let [min-depth 4
        max-depth 6
        stretch-depth (inc max-depth)
        tree (bottom-up-tree 0 stretch-depth)
        check (item-check tree)]
    (let [long-lived-tree (bottom-up-tree 0 max-depth)]
      (doseq [d (range min-depth stretch-depth 2)]
        (iterate-trees max-depth min-depth d)))))
