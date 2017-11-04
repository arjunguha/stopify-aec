#!/usr/bin/env Rscript
suppressMessages(library(tidyverse))
library(stringr)
library(extrafont)
library(fontcm)

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
             axis.text.x = element_text(margin = margin(t = 5)),
             legend.key = element_rect(colour=NA),
             legend.margin = margin(unit(0.001, "in")),
             legend.key.size = unit(0.2, "in"),
             legend.title = element_blank(),
             legend.position = c(0.7, .2),
             legend.background = element_blank()))
}

all_data <- read_csv("../results.csv")

original <- all_data %>%
  filter(Transform == "original") %>%
  select(Benchmark,Language,Platform,RunningTime)

original_avgtimes <- original %>%
  group_by(Benchmark, Language, Platform) %>%
  summarise(AvgOriginalTime = mean(RunningTime)) %>%
  ungroup()

slowdowns <- all_data %>%
  filter(Transform != "original") %>%
  filter(Estimator == "reservoir") %>%
  filter(YieldInterval == 100) %>%
  inner_join(original_avgtimes) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark,Platform,Language,Slowdown) %>%  
  mutate(N = 1) %>%
  group_by(Platform, Language) %>%
  arrange(Slowdown) %>%
  mutate(.y = cumsum(N) / length(N)) %>%
  ungroup() %>%
  select(-N)

by_platform <- function(platform) {
  slowdowns <- all_data %>%
    filter(Transform != "original") %>%
    filter(Estimator == "reservoir") %>%
    filter(Platform == platform) %>%
    filter(YieldInterval == 100) %>%
    inner_join(original_avgtimes) %>%
    mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
    filter(Slowdown < 100) %>%
    select(Benchmark,Language,Slowdown) %>%
    mutate(N = 1) %>%
    arrange(Slowdown) %>%
    mutate(Y = cumsum(N))
  return(slowdowns)
  
}

by_language <- function(lang) {
  slowdowns <- slowdowns %>%
    filter(Language == lang) %>%
  return(slowdowns)
}

save_by_language <- function(lang) {
  plot <- ggplot(slowdowns %>% filter(Language==lang), 
                 aes(x=Slowdown,color=Platform)) + 
    stat_ecdf() +
    mytheme() +
    ylab("Percentage of Benchmarks")
  ggsave(paste0(lang, ".pdf"), plot, width=4, height=3, units=c("in"))
}

save_by_language("python_pyjs") # 1
save_by_language("c++") # 2
save_by_language("dart_dart2js") # 3
save_by_language("clojurescript") # 4
save_by_language("java") # 5
save_by_language("scheme") # 6
save_by_language("ocaml") # 7
save_by_language("scala") # 8
save_by_language("javascript") # 9
save_by_language("pyret") # 10
