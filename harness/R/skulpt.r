#!/usr/bin/env Rscript
library(tidyverse)

skulpt_times <- read_csv("../../scripts/timing-skulpt.csv") %>%
  select(Benchmark,RunningTime) %>%
  group_by(Benchmark) %>%
  summarize(MeanSkulptTime = mean(RunningTime)) %>%
  ungroup()

stopify_times <- read_csv("../results.csv") %>%
  filter(Language == "python_pyjs") %>%  
  filter(Platform == "chrome") %>%
  filter(Transform == "lazy") %>%
  select(Benchmark,RunningTime) %>%
  group_by(Benchmark) %>%
  ungroup()

slowdowns <- stopify_times %>%
  inner_join(skulpt_times) %>%
  mutate(Slowdown = RunningTime / MeanSkulptTime) %>%
  group_by(Benchmark) %>%
  summarize(.mean = mean(Slowdown),
            .ci = 1.96 * sd(Slowdown) / sqrt(length(Slowdown)))


ggplot(slowdowns, aes(x=Benchmark,y=.mean)) + 
  geom_bar(stat="identity") +
  geom_errorbar(
    aes(ymin=.mean-.ci/2,ymax=.mean+.ci/2), size=0.3, width=.9, 
    position=position_dodge(.9)) +
  labs(y = "Normalized runtime") +
  theme_bw() + 
  theme(axis.text.x = element_text(hjust = 1, angle=60),
        text = element_text(family="serif", size=8),
        panel.grid.major = element_line(colour="gray", size=0.1),
        axis.ticks = element_line(size=0.05),
        axis.ticks.length=unit("-0.05", "in"),
        axis.text.y = element_text(margin = margin(r = 5)))

ggsave("pyjs_skulpt_relative_slowdown.pdf", width=4,height=2, units="in")
