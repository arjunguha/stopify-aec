#!/usr/bin/env Rscript
suppressMessages(library(tidyverse))
suppressMessages(source("./theme.R"))
library(stringr)

timing_csv <- commandArgs(TRUE)
timing_csv <- c("results.csv")

if (length(timing_csv) != 1) {
  cat("Usage: python_case_study.R <timing.csv>\n")
  quit(save = "no", status = 1)
}

all_data <- read_csv(timing_csv) %>%
  filter(Language == "python_pyjs") %>%
  select(-Language)

# Some Python benchmarks do not complete in full ES5 mode in a reasonable
# amount of time. So, we exclude them from the case study but they are in
# the full evaluation.
conservative_benchmarks <- unique((all_data %>% filter(EsMode == "es5"))$Benchmark)
all_data <- all_data %>% filter(Benchmark %in% conservative_benchmarks)

native <- all_data %>%
  filter(Platform == "native") %>%
  select(Benchmark,RunningTime) %>%
  group_by(Benchmark) %>%
  summarise(MeanNativeTime = mean(RunningTime)) %>%
  ungroup()

original <- all_data %>%
  filter(Transform == "original") %>%
  select(Benchmark,Platform,RunningTime)

original_avgtimes <- original %>%
  select(Benchmark, Platform, RunningTime) %>%
  group_by(Benchmark, Platform) %>%
  summarise(AvgOriginalTime = mean(RunningTime)) %>%
  ungroup()
  
# Compare vanilla PyJS vs. PyJS + Stopify with naive settings on Chrome
conservative <- inner_join(
  all_data %>%
    filter(Platform == "chrome" & Transform == "lazy" & NewMethod == "direct" &
           EsMode == "es5" & Estimator == "countdown") %>% 
    select(Benchmark,RunningTime),
  original_avgtimes %>% 
    filter(Platform == 'chrome') %>%
    select(-Platform))
conservative <- conservative %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Slowdown) %>%
  group_by(Benchmark) %>%
  summarise(MeanSlowdown = mean(Slowdown),
            SeSlowdown = sd(Slowdown) / sqrt(length(Slowdown))) %>%
  ungroup()

mean(conservative$MeanSlowdown)

plot <- ggplot(conservative, aes(x=Benchmark,y=MeanSlowdown)) +
  mytheme() +
  geom_bar(stat="identity",fill="red") +
  geom_errorbar(aes(ymin=MeanSlowdown-SeSlowdown,ymax=MeanSlowdown+SeSlowdown)) +
  ylab("Slowdown relative to PyJS")
mysave("pyjs_case_study_conservative.pdf", plot)

# Slowdown without implicit conversions
es_sane <- inner_join(
  all_data %>%
    filter(Platform == "chrome" & Transform == "lazy" & NewMethod == "direct" &
             EsMode == "sane" & Estimator == "countdown") %>%
    select(Benchmark,RunningTime),
  original_avgtimes %>% 
    filter(Platform == 'chrome') %>%
    select(-Platform))
es_sane <- es_sane %>%  
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Slowdown) %>%
  group_by(Benchmark) %>%
  summarise(MeanSlowdown = mean(Slowdown),
            SeSlowdown = sd(Slowdown) / sqrt(length(Slowdown))) %>%
  ungroup()

mean(es_sane$MeanSlowdown)

es_sane_vs_insane <- rbind(
  conservative %>% mutate(Factor = "Implicit Conversions"),
  es_sane %>% mutate(Factor = "No Conversions")
)

plot <- ggplot(es_sane_vs_insane, aes(x=Benchmark,y=MeanSlowdown,fill=Factor)) +
  mytheme() +
  geom_bar(stat="identity", position="dodge") +
  geom_errorbar(aes(ymin=MeanSlowdown-SeSlowdown,ymax=MeanSlowdown+SeSlowdown)) +
  ylab("Slowdown relative to PyJS")
mysave("pyjs_case_study_sane_vs_insane.pdf", plot)

new_method <- all_data %>%
  filter(Transform == "lazy" & EsMode == "sane" & Estimator == "countdown") %>%
  select(Benchmark,Platform,NewMethod,RunningTime)
new_method <- inner_join(new_method,original_avgtimes) %>%
  mutate(Factor = str_c(Platform, 
                        ifelse(NewMethod == "direct", "new", "Object.c"),
                        sep = " - ")) %>%
  select(Benchmark,Factor,RunningTime, AvgOriginalTime)

new_method <- new_method %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Factor, Slowdown) %>%
  group_by(Benchmark,Factor) %>%
  summarise(MeanSlowdown = mean(Slowdown),
            SeSlowdown = sd(Slowdown) / sqrt(length(Slowdown))) %>%
  ungroup()

plot <- ggplot(new_method, 
               aes(x=Benchmark,y=MeanSlowdown,fill=Factor)) +
  mytheme() +
  geom_bar(stat="identity", position="dodge") +
  geom_errorbar(aes(ymin=MeanSlowdown-SeSlowdown,ymax=MeanSlowdown+SeSlowdown)) +
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
