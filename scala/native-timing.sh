#!/bin/bash

echo "ix|lang|bench|platform|transform|new_method|es_mode|js_args|estimator|time_per_elapsed|yield_interval|resample_interval|running_time|num_yields"

for ix in `seq 0 9`; do
  for f in $(find ./jvm-build -type f); do
    echo "$ix|java|$(basename -s .jar $f)|native|NA|NA|NA|NA|NA|NA|NA|NA|$(./time.js java -jar $f)|NA"
  done
done
