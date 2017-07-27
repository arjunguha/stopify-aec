#!/bin/bash
set -e
WD=`dirname $0`
OUTPUT="__javascript__/${1%%.*}.js"
rm $OUTPUT || true
transcrypt --parent .none --nomin --opov --xpath $WD/../shims $1
node $OUTPUT
