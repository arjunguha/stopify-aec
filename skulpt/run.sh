set -e

TIMING=timing.csv

echo "Timing skulpt..."
echo "Transform,Language,Benchmark,Platform,RunningTime" > $TIMING

for i in {1..10}
do
  echo Loop $i...
  for browser in chrome
  do
    # b, raytrace_simple, richards, and deltablue don't "just work" with skulpt.
    for bench in anagram binary_trees fib gcbench nbody pystone schulze spectral_norm
    do
      echo skulpt,python,$bench,$browser,`node selenium-skulpt.js ./js-build/$bench.html $browser` >> $TIMING
    done
  done
done
