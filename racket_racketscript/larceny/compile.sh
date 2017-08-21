#!/bin/bash

if [ -d main.rkt ]; then
  echo "Expected main.rkt"
  exit 1
fi

racks main.rkt