#!/bin/bash
set -e
if [ -d main.rkt ]; then
  echo "Expected main.rkt"
  exit 1
fi

racks -t babel main.rkt
 webpack --output-filename main.js --entry ./js-build/dist/modules/main.rkt.js