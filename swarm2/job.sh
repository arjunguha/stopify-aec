#!/bin/bash
cd `dirname $0`
FILE=$1
LANGUAGE=`echo $FILE | awk -F / '{ print $2 }'`
NAME=`basename $FILE`
INTERVAL=$2
TRANSFORM=$3

FILENAME=`basename $FILE`

# We don't seem to interpret "-y 0" in a consistent way.
if [ $INTERVAL -eq 0 ]; then
  INTERVALSTR=""
else
  INTERVALSTR="-y $INTERVAL"
fi


# Special case for baseline. There is no need for a temporary file.
# In addition, we only calculate the baseline with $INTERVAL -eq 0.
# This is slightly inefficient.
if [ "$TRANSFORM" == "baseline" ]; then
  if [ ! $INTERVAL -eq 0 ]; then
    exit 0
  fi
  TIME=`./time.js node $FILE`
  echo $NAME,$LANGUAGE,$TRANSFORM,$INTERVAL,$TIME
  exit 0
fi


WD=`mktemp -d`

function cleanup {
  rm -rf $WD
}

trap cleanup EXIT

mkdir $WD/node_modules
ln -s /home/arjun/repos/plasma-umass/Stopify $WD/node_modules/stopify

../../bin/stopify -i $FILE -t $TRANSFORM $INTERVALSTR > $WD/$FILENAME 2> /dev/null
if [ ! $? -eq 0 ]; then
  echo $NAME,$LANGUAGE,$TRANSFORM,$INTERVAL,0
  exit 0
fi

TIME=`./time.js node --harmony_tailcalls $WD/$FILENAME 2> /dev/null`
if [ ! $? -eq 0 ]; then
  echo $NAME,$LANGUAGE,$TRANSFORM,$INTERVAL,0
  exit 0
fi

echo $NAME,$LANGUAGE,$TRANSFORM,$INTERVAL,$TIME
