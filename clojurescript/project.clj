(defproject lejure "0.1.0-SNAPSHOT"
  :description "Pure ClojureScript benchmarks"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [cljx-sampling "0.1.0"]]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["nbody" "binarytrees" "fannkuch" "pidigits" "spectralnorm" "meteor" "memuse" "collatz"]
  :clean-targets
  [[:cljsbuild :builds 0 :compiler :output-to]
   :target-path
   :compile-path]
  :profiles {:uberjar {:aot :all}}
  :cljsbuild {
              :builds {:nbody {:id "dev"
                               :jar true
                               :source-paths ["nbody"]
                               :incremental true
                               :compiler {
                                          :cache-analysis true
                                          :parallel-build true
                                          :optimizations :advanced
                                          :output-to "js-build/nbody.js"
                                          :output-dir "out/nbody"
                                          :static-fns true}}
                       :binarytrees {:id "dev"
                                     :jar true
                                     :source-paths ["binarytrees"]
                                     :incremental true
                                     :compiler {
                                                :cache-analysis true
                                                :parallel-build true
                                                :optimizations :advanced
                                                :output-to "js-build/binarytrees.js"
                                                :output-dir "out/binarytrees"
                                                :static-fns true}}
                       :fannkuch {:id "dev"
                                  :jar true
                                  :source-paths ["fannkuch"]
                                  :incremental true
                                  :compiler {
                                             :cache-analysis true
                                             :parallel-build true
                                             :optimizations :advanced
                                             :output-to "js-build/fannkuch.js"
                                             :output-dir "out/fannkuch"
                                             :static-fns true}}
                       :pidigits {:id "dev"
                                  :jar true
                                  :source-paths ["pidigits"]
                                  :incremental true
                                  :compiler {
                                             :cache-analysis true
                                             :parallel-build true
                                             :optimizations :advanced
                                             :output-to "js-build/pidigits.js"
                                             :output-dir "out/pidigits"
                                             :static-fns true}}
                       :spectralnorm {:id "dev"
                                      :jar true
                                      :source-paths ["spectralnorm"]
                                      :incremental true
                                      :compiler {
                                                 :cache-analysis true
                                                 :parallel-build true
                                                 :optimizations :advanced
                                                 :output-to "js-build/spectralnorm.js"
                                                 :output-dir "out/spectralnorm"
                                                 :static-fns true}}
                       :meteor {:id "dev"
                                :jar true
                                :source-paths ["meteor"]
                                :incremental true
                                :compiler {
                                           :cache-analysis true
                                           :parallel-build true
                                           :optimizations :advanced
                                           :output-to "js-build/meteor.js"
                                           :output-dir "out/meteor"
                                           :static-fns true}}
                       :memuse {:id "dev"
                                :jar true
                                :source-paths ["memuse"]
                                :incremental true
                                :compiler {
                                           :cache-analysis true
                                           :parallel-build true
                                           :optimizations :advanced
                                           :output-to "js-build/memuse.js"
                                           :output-dir "out/memuse"
                                           :static-fns true}}
                       :collatz {:id "dev"
                                 :jar true
                                 :source-paths ["collatz"]
                                 :incremental true
                                 :compiler {
                                            :cache-analysis true
                                            :parallel-build true
                                            :optimizations :advanced
                                            :output-to "js-build/collatz.js"
                                            :output-dir "out/collatz"
                                            :static-fns true}}}})
