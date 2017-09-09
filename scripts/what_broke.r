#!/usr/local/bin/Rscript
source("./lib.r")

args <- commandArgs(TRUE)

if (length(args) != 2) {
  stop("Usage: what_broke.r <old-timing.csv> <new-timing.csv>")
}

diff <- what_broke(args[1], args[2])
print(diff)
  