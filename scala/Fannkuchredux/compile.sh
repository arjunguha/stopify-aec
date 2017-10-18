#!/bin/bash
set -e
set -x
NAME=$(basename `pwd`)
sbt compileAll
sed -e '20,23d' js/target/scala-2.12/root-fastopt.js | \
	awk 'NR==20{print "var $g = typeof window === \"object\" ? window : global;"}1' > \
	../js-build/$NAME.js
cp jvm/target/scala-2.12/main.jar ../jvm-build/$NAME.jar