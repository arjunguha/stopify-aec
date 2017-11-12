library(tidyverse)

all_data <- read_csv("../results.csv") %>%
  filter(Language == "pyret") %>%
  select(Benchmark,RunningTime,Platform,Transform,NumYields) %>%
  mutate(Transform = if_else(Transform == "lazy", "with Breakout", 
                             if_else(Transform == "native", 
                                     "No stopping", 
                                     "without Breakout")))

without_avgtimes <- all_data %>%
  filter(Transform == "without Breakout") %>%
  group_by(Benchmark, Platform) %>%
  summarise(MeanOriginal = mean(RunningTime)) %>%
  ungroup() %>%
  select(Benchmark, Platform, MeanOriginal)

slowdowns <- all_data %>%
  filter(Transform == "with Breakout") %>%
  inner_join(without_avgtimes) %>%
  mutate(Slowdown = RunningTime / MeanOriginal)

ggplot(slowdowns, aes(x = Slowdown, color=Platform)) + 
  stat_ecdf() +
  scale_x_continuous(breaks = 1:20) +
  theme_bw() +
  theme(
    panel.background = element_rect(size = 0.9),
    text = element_text(family="serif", size=16),
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
    legend.background = element_blank())

ggsave("pyret_slowdown.pdf")
