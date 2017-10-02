#!/bin/sh

for i in "$@"; do
  echo "$i -> $i.out"
  node ./minifier/minifier.js $i > $i.out
  mv $i.out $i
done
