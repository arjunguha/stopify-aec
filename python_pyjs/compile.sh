#!/bin/bash

set -e
set -x
COMPILER_ROOT=`dirname $0`
NAME=$(basename `pwd`)

if [ ! -f main.py ]; then
  echo "Expected main.py"
  exit 1
fi

cp $COMPILER_ROOT/prelude.js main.js
pyjscompile main.py >> main.js
echo 'pygwtOnLoad();' >> main.js
mv main.js ../js-build/$NAME.js