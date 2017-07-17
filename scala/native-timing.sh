#!/bin/bash

echo "Benchmark,Native,JS"
for DIR in *; do
  if [ ! -d $DIR ]; then
    continue
  fi
  if [ ! -f $DIR/main.js ]; then
    continue
  fi
  if [ ! -f $DIR/main.jar ]; then
    continue
  fi
  echo $DIR,`../time.js java -jar $DIR/main.jar`,`../time.js node $DIR/main.js`
done
