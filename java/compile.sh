#!/bin/bash
set -e

SRCFILE=$1
DSTFILE=$2
WORKSPACE=`mktemp -d`

mkdir -p $WORKSPACE/src/main/java
cp pom.xml $WORKSPACE/pom.xml
cp $SRCFILE $WORKSPACE/src/main/java
(cd $WORKSPACE; mvn generate-sources)
sed -e 's/java.applet.Applet.__static_initialize();//g' $WORKSPACE/webapp/j4ts-0.2.0-SNAPSHOT/bundle.js > $DSTFILE
cat $WORKSPACE/target/bundle.js >> $DSTFILE
echo $WORKSPACE
