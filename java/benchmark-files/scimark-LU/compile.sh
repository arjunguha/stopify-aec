#!/bin/bash
# NOTE: This builds both the .js and the .jar
set -x
set -e
DIR=`pwd`
NAME=`basename $DIR`
mvn generate-sources package
tsc
cat target/js/Random.js target/js/Main.js > ../js-build/$NAME.js
