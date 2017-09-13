#!/usr/bin/env Rscript
library(scales)
library(grid)
library(extrafont)
library(fontcm)
library(extrafont)
source("./lib.r")

linew <- 0.9
mytheme <- function() {
  return(theme_bw() +
           theme(
             panel.background = element_rect(size = 0.9),
             text = element_text(family = "CM Roman", size=10),
             #panel.grid.major = element_blank(),
             #panel.grid.minor = element_blank(),
             panel.grid.major = element_line(colour="gray", size=0.1),
             panel.grid.minor = element_line(colour="gray", size=0.1, linetype='dotted'),
             axis.ticks = element_line(size=0.05),
             axis.ticks.length=unit("-0.05", "in"),
             axis.ticks.margin=unit("0.2", "in"),
             axis.text.y = element_text(margin = margin(r = 5)),
             axis.text.x = element_text(margin = margin(t = 5), angle=90),
             legend.key = element_rect(colour=NA),
             legend.margin = unit(0.001, "in"),
             legend.key.size = unit(0.2, "in"),
             legend.title = element_blank(),
             legend.position = c(0.9, .7),
             legend.text = element_text(family = "CM Roman", size=8),
             legend.background = element_blank()))
}

mysave <- function(filename, plot) {
  ggsave(filename, plot, width=8, height=8, units=c("in"))
  embed_fonts(filename)
}

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
  ylab("% of benchmarks") +
  scale_x_continuous(breaks = seq(0, 100, by = 10),
                     minor_breaks = seq(0, 100, by = 1)) +
  mytheme()

mysave("slowdown.pdf", plot)

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


