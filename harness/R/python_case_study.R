#!/usr/bin/env Rscript
suppressMessages(library(tidyverse))
suppressMessages(source("./theme.R"))
library(stringr)

# 99% within 2.58all stddev
plot_ci <- .99

timing_csv <- commandArgs(TRUE)
timing_csv <- c("../results.csv")

if (length(timing_csv) != 1) {
  cat("Usage: python_case_study.R <timing.csv>\n")
  quit(save = "no", status = 1)
}

all_data <- read_csv(timing_csv) %>%
  filter(Language == "python_pyjs") %>%
  select(-Language) %>%
  mutate(Platform = ifelse(Platform == "MicrosoftEdge", "edge", Platform),
         NewMethod = ifelse(NewMethod == "direct", "new", "object"))

# Some Python benchmarks do not complete in full ES5 mode in a reasonable
# amount of time. So, we exclude them from the case study but they are in
# the full evaluation.
conservative_benchmarks <- unique((all_data %>% filter(EsMode == "es5"))$Benchmark)
all_data <- all_data %>% filter(Benchmark %in% conservative_benchmarks)

# Native running times.
native <- all_data %>%
  filter(Platform == "native") %>%
  select(Benchmark,RunningTime) %>%
  group_by(Benchmark) %>%
  summarise(MeanNativeTime = mean(RunningTime)) %>%
  ungroup()

# Running times on PyJS without Stopify.
original <- all_data %>%
  filter(Transform == "original") %>%
  select(Benchmark,Platform,RunningTime)

original_avgtimes <- original %>%
  select(Benchmark, Platform, RunningTime) %>%
  group_by(Benchmark, Platform) %>%
  summarise(AvgOriginalTime = mean(RunningTime)) %>%
  ungroup()

original_chrome <- original_avgtimes %>% 
  filter(Platform == 'chrome') %>%
  select(-Platform)

ci <- function(vec) {
  n <- length(vec)
  return (qt(1 - plot_ci, n - 1) * sd(vec) / sqrt(n))
}
  
# Compare vanilla PyJS vs. PyJS + Stopify with naive settings on Chrome
conservative <- all_data %>%
  filter(Platform == "chrome" & Transform == "lazy" & NewMethod == "new" &
           EsMode == "es5" & Estimator == "countdown") %>% 
  select(Benchmark,RunningTime) %>%
  inner_join(original_chrome) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Slowdown) %>%
  group_by(Benchmark) %>%
  summarise(Mean = mean(Slowdown), CI = ci(Slowdown)) %>%
  ungroup()

mean(conservative$Mean)

# Slowdown without implicit conversions
es_sane <- all_data %>%
  filter(Platform == "chrome" & Transform == "lazy" & NewMethod == "new" &
         EsMode == "sane" & Estimator == "countdown") %>%
  select(Benchmark,RunningTime) %>%
  inner_join(original_chrome, by="Benchmark") %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Slowdown) %>%
  group_by(Benchmark) %>%
  summarise(Mean = mean(Slowdown), CI = ci(Slowdown)) %>%
  ungroup()

es_sane_vs_insane <- rbind(
  conservative %>% mutate(Factor = "Implicit Conversions"),
  es_sane %>% mutate(Factor = "No Conversions")
)

my_error_bars <- geom_errorbar(
  aes(ymin=Mean-CI/2,ymax=Mean+CI/2), size=0.1, width=.9, 
      position=position_dodge(.9))

plot <- ggplot(es_sane_vs_insane, aes(x=Benchmark,y=Mean,fill=Factor)) +
  mytheme() +
  geom_bar(stat="identity", position="dodge") +
  my_error_bars +
  ylab("Slowdown relative to PyJS")
mysave("pyjs_case_study_sane_vs_insane.pdf", plot)

new_method <- all_data %>%
  filter(Transform == "lazy" & EsMode == "sane" & Estimator == "countdown") %>%
  select(Benchmark,Platform,NewMethod,RunningTime) %>%
  inner_join(original_avgtimes, by=c("Benchmark", "Platform")) %>%
  filter(Platform == "chrome" | Platform == "edge") %>%
  mutate(Factor = str_c(Platform, NewMethod, sep = " - ")) %>%
  select(Benchmark,Factor,RunningTime, AvgOriginalTime) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Factor, Slowdown) %>%
  group_by(Benchmark,Factor) %>%
  summarise(Mean = mean(Slowdown), CI = ci(Slowdown)) %>%
  ungroup()

plot <- ggplot(new_method, 
               aes(x=Benchmark,y=Mean,fill=Factor)) +
  mytheme() +
  geom_bar(stat="identity", position="dodge") +
  my_error_bars +
  ylab("Slowdown relative to PyJS")
mysave("pyjs_case_study_new_method.pdf", plot)

avg_interval <- all_data %>% 
  filter(Transform == "lazy" & EsMode == "sane" & Estimator == "countdown" &
         ((Platform == "chrome" & NewMethod == "wrapper") |
          (Platform == "firefox" & NewMethod == "direct"))) %>%
  mutate(AvgInterval = RunningTime / NumYields) %>%
  select(Benchmark,Platform,AvgInterval)
plot <- ggplot(avg_interval, aes(x=Benchmark,y=AvgInterval,fill=Platform)) +
  mytheme() +
  geom_bar(stat="identity", position="dodge") +
  ylab("Average interval between yields")
mysave("pyjs_case_study_interval_variance.pdf", plot)

timing_reservoir <- inner_join(
  all_data %>%
    filter(Transform == "lazy" & EsMode == "sane" & Estimator == "reservoir" &
          YieldInterval == 100) %>%
    select(Benchmark,Platform,RunningTime),
  original_avgtimes)  
timing_reservoir <- timing_reservoir %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Platform, Slowdown) %>%
  group_by(Benchmark,Platform) %>%
  summarise(Mean = mean(Slowdown),
          Se = sd(Slowdown) / sqrt(length(Slowdown)))
  
interval_reservoir <- all_data %>%
    filter(Transform == "lazy" & EsMode == "sane" & Estimator == "reservoir" &
             YieldInterval == 100) %>%
    mutate(AvgInterval = RunningTime / NumYields) %>%
    select(Benchmark,Platform,AvgInterval) %>%
  group_by(Benchmark,Platform) %>%
  summarise(Mean = mean(AvgInterval),
            Se = sd(AvgInterval) / sqrt(length(AvgInterval)))
