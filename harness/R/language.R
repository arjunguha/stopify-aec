suppressMessages(library(tidyverse))
library(stringr)

all_data <- read_csv("../results.csv")

original <- all_data %>%
  filter(Transform == "original") %>%
  select(Benchmark,Language,Platform,RunningTime)

original_avgtimes <- original %>%
  group_by(Benchmark, Language, Platform) %>%
  summarise(AvgOriginalTime = mean(RunningTime)) %>%
  ungroup()

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
  slowdowns <- all_data %>%
    filter(Transform != "original") %>%
    filter(Estimator == "reservoir") %>%
    filter(Language == lang) %>%
    filter(YieldInterval == 100) %>%
    inner_join(original_avgtimes) %>%
    mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
    select(Benchmark,Platform,Slowdown) %>%
    mutate(N = 1) %>%
    arrange(Slowdown) %>%
    mutate(Y = cumsum(N))
  return(slowdowns)
}

save_by_language <- function(lang) {
  plot <- ggplot(by_language(lang), aes(x=Slowdown,y=Y,color=Platform)) + 
    geom_step()
  ggsave(paste0(lang, ".pdf"), plot)
}

save_by_platform <- function(platform) {
  plot <- ggplot(by_platform(platform), aes(x=Slowdown,y=Y,color=Language)) + 
    geom_step()
  ggsave(paste0(platform, ".pdf"), plot)
}

save_by_platform("chrome")
save_by_platform("firefox")
save_by_platform("safari")
save_by_platform("MicrosoftEdge")
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
