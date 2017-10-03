set -e

TIMING=timing.csv

echo "Timing skulpt..."
echo "Transform,Benchmark,Platform,RunningTime" > $TIMING

for browser in chrome firefox
do
  # b, raytrace_simple, richards, and deltablue don't "just work" with skulpt.
  for bench in anagram binary_trees fib gcbench nbody pystone schulze spectral_norm
  do
    echo skulpt,$bench,$browser,`node selenium-skulpt.js ./js-build/$bench.html $browser` >> $TIMING
  done
done
