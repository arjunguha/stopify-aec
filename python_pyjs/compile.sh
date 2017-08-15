#!/bin/bash

set -e
COMPILER_ROOT=`dirname $0`

if [ ! -f $1/main.py ]; then
  echo "Expected $1/main.py"
  exit 1
fi

cp $COMPILER_ROOT/prelude.js $1/main.js
pyjscompile $1/main.py >> $1/main.js
echo 'pygwtOnLoad();' >> $1/main.js