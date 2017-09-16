#!/usr/bin/env Rscript
source("./lib.r")

sources <- commandArgs(TRUE)

if (length(sources) == 0) {
  stop("Expected sources on comand line")
}

data <- NA
for (source in sources) {
  aData <- read_timing(source)
  if (is.na(data)) {
    data <- aData
  } else {
    data <- rbind(data, aData)
  }
}

df <- calc_slowdown(data)
plot <- ggplot(df, aes(x=Slowdown, color=Type,y=Count)) + geom_step() +
  ylab("number of benchmarks") +
  scale_x_continuous(breaks = seq(0, 100, by = 10),
                     minor_breaks = seq(0, 100, by = 1)) +
  mytheme()

mysave("slowdown.jpg", plot)

# df <- data %>%
#   mutate(Type = paste(Platform,Transform,TargetLatency)) %>%
#   mutate(Label = paste(Language,Benchmark)) %>%
#   select(-Platform,-Transform,-TargetLatency,-Language,-Benchmark)

# plot <- ggplot(df, aes(x=Label,y=RunningTime)) +
#   geom_bar(position="dodge", aes(fill=Type),stat="identity") +
#   ylab("Time (ms)") + mytheme()

# mysave("data.pdf", plot)


# write.table(df, quote= FALSE,sep=",",row.names=FALSE)
# plot <- ggplot(df, aes(x=Label,y=Slowdown)) +
#   geom_bar(position="dodge", aes(fill=Type),stat="identity") +
#   ylab("Slowdown") +

#   mytheme()


