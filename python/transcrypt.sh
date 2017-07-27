#!/bin/bash
set -e
WD=`dirname $0`
OUTPUT="__javascript__/${1%%.*}.js"
transcrypt --parent .none --nomin --xpath $WD/shims $1
cp $OUTPUT .
