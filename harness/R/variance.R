#! /usr/bin/env Rscript
suppressMessages(library(tidyverse))
library(stringr)
library(extrafont)
library(fontcm)
library(xtable)
palette <- c("#999999", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7")

# Theme for output
mytheme <- function() {
  return(theme_bw() +
           theme(
             panel.background = element_rect(size = 0.9),
             text = element_text(family="serif", size=16),
             #panel.grid.major = element_blank(),
             #panel.grid.minor = element_blank(),
             panel.grid.major = element_line(colour="gray", size=0.1),
             panel.grid.minor =
               element_line(colour="gray", size=0.1, linetype='dotted'),
             axis.ticks = element_line(size=0.05),
             axis.ticks.length=unit("-0.05", "in"),
             axis.text.y = element_text(margin = margin(r = 5)),
             axis.text.x = element_text(margin = margin(t = 5),hjust = 1,angle=45),
             legend.key = element_rect(colour=NA),
             legend.margin = margin(unit(0.001, "in")),
             legend.key.size = unit(0.2, "in"),
             legend.title = element_blank(),
             legend.position = c(0.7, .8),
             legend.background = element_blank()))
}

all_data <- read_csv("../variance.csv") %>% mutate(Benchmark=gsub('_','-',Benchmark))

by_estimator <- function (data, estimator) {
  df <- data %>% filter(Estimator==estimator) %>%
    group_by(Benchmark) %>%
    mutate(MaxIndex=max(Index)) %>%
    ungroup()

  return (df)
}

latencies <- function (data) {
  digits <- 4
  countdown <- data %>% filter(Estimator=='countdown') %>% group_by(Benchmark) %>%
    mutate(CountdownMeanSD=paste(format(mean(Variance),digits=digits),'$\\pm$',format(sd(Variance),digits=digits),'ms')) %>%
    select(Benchmark,CountdownMeanSD) %>% distinct()
  velocity <- data %>% filter(Estimator=='velocity') %>% group_by(Benchmark) %>%
    mutate(VelocityMeanSD=paste(format(mean(Variance),digits=digits),'$\\pm$',format(sd(Variance),digits=digits),'ms')) %>%
    select(Benchmark,VelocityMeanSD) %>% distinct()
  
  df <- inner_join(countdown,velocity)

  return (df)
}

# plot <- function(data) {
#   ggplot(data, aes(x=Index/MaxIndex, y=Variance, color=Benchmark)) +
#     geom_line()
# }

latency_table <- function(data) {
  tbl <- xtable(data,align=c('l','l','r','r'),label='tbl:variance',
                caption='A comparison of Countdown and Velocity yielding strategies on Python benchmarks. \
Results show the mean ($\\mu$) and standard deviation ($\\sigma$) of the latency between yield intervals. \
For $\\mu$, closer to 100ms is better. For $\\sigma$, lower is better.')
  print.xtable(tbl, file="variance.tex", include.rownames = F, size='\\small',
               floating.environment = 'figure',
               sanitize.text.function = function (x) {x},
               sanitize.rownames.function = NULL,
               sanitize.colnames.function = function(x) {
                 return (c('Benchmark','Countdown ($\\mu \\pm \\sigma$)','Velocity ($\\mu \\pm \\sigma$)'))
                 })
  return (tbl)
}

# countdown <- by_estimator(all_data, 'countdown')
# exact <- by_estimator(all_data, 'exact')
# velocity <- by_estimator(all_data, 'velocity')

# plot(countdown)
# plot(exact)
# plot(velocity)

latency_table(latencies(all_data))
