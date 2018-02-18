set -e

if [ ! -d js-build/ ]; then
  echo "Creating js-build/"
  mkdir js-build
fi

for x in anagram binary_trees fib gcbench nbody pystone schulze spectral_norm
do
  echo $x
  node html-generator.js $x/$x.js js-build/$x
done

