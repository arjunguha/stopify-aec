#!/usr/bin/env Rscript
source("./lib.r")

linew <- 0.9
sources <- commandArgs(TRUE)

if (length(sources) == 0) {
  stop("Expected sources on comand line")
}

data <- NA
for (source in sources) {
  aData <- read_code_size(source)
  if (is.na(data)) {
    data <- aData
  } else {
    data <- rbind(data, aData)
  }
}

df <- code_blow(data)
plot <- ggplot(df, aes(x=TimesBlowup, color=Type, y=Count)) + geom_step() +
  ylab("number of benchmarks") +
  scale_x_continuous(breaks = seq(0, 100, by = 10),
                     minor_breaks = seq(0, 100, by = 1)) +
  mytheme()

mysave("size.jpg", plot)
