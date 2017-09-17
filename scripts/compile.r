#!/usr/bin/env Rscript
source("./lib.r")

linew <- 0.9
sources <- commandArgs(TRUE)

if (length(sources) == 0) {
  stop("Expected sources on comand line")
}

data <- NA
for (source in sources) {
  aData <- read_compile_time(source)
  if (is.na(data)) {
    data <- aData
  } else {
    data <- rbind(data, aData)
  }
}

df <- compile_time(data)
print(df)
plot <- ggplot(df, aes(x=Time, color=Type, y=Count)) + geom_step() +
  ylab("number of benchmarks") +
  xlab("time (in ms)") +
  mytheme()

mysave("compile.jpg", plot)
