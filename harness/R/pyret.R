library(tidyverse)

plot_pyret <- function (lang) {
  all_data <- read_csv("../results.csv") %>%
    filter(Language == lang) %>%
    select(Benchmark,RunningTime,Platform,Transform,NumYields) %>%
    mutate(Transform = if_else(Transform == "native", "without Breakout",
                               if_else(Transform == "original",
                                       "no yields",
                                       "with Breakout")))

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
    stat_ecdf()

  ggsave(paste(lang, "_slowdown.pdf", sep=""), width=5, height=5, units=c("in"))

  stats <- function (plat) {
    print(plat)
    print(mean((slowdowns %>% filter(Platform == plat))$Slowdown))
    print(sd((slowdowns %>% filter(Platform == plat))$Slowdown))
  }

  stats("chrome")
  stats("safari")
  stats("firefox")
  stats("MicrosoftEdge")
}

plot_pyret("pyret_deepstacks")
plot_pyret("pyret")
