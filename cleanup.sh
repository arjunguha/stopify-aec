#!/bin/sh

# Cleanup the output.

FILE="$1"
OUT="$2"

echo 'browser, compile time, run time, latency measurements, latency avg., latency var., filename, transform, interval, debug, optimize, no_eval, tail_calls' > $OUT

cat $FILE | sed 's/, [^:]*:/,/g' >> $OUT
