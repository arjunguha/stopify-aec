#!/usr/bin/env Rscript
suppressMessages(library(tidyverse))
suppressMessages(source("./theme.R"))
library(stringr)

palette <- c("#999999", "#E69F00", "#56B4E9", "#009E73", "#D55E00", "#CC79A7")
# Theme for output
my_theme <- function() {
  return(mytheme() +
           theme(
             legend.key.size = unit(0.1, "in"),
             legend.position = c(0.75, .9),
             legend.text = element_text(family="serif", size=8)))
}

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
  filter(Benchmark == 'b' | Benchmark=='binary_trees' | Benchmark=='deltablue' |
           Benchmark=='fib' | Benchmark=='float' | Benchmark=='nbody' | Benchmark=='pystone' |
           Benchmark=='richards' | Benchmark=='scimark-fft' | Benchmark=='spectral_norm') %>%
  select(-Language) %>%
  mutate(Platform = ifelse(Platform == "MicrosoftEdge", "Edge", ifelse(Platform == "chrome", "Chrome", Platform)),
         NewMethod = ifelse(NewMethod == "direct", "dynamic", "desugar"))

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
  filter(Platform == 'Chrome') %>%
  select(-Platform)

ci <- function(vec) {
  n <- length(vec)
  return (qt(1 - plot_ci, n - 1) * sd(vec) / sqrt(n))
}
  
# Compare vanilla PyJS vs. PyJS + Stopify with naive settings on Chrome
conservative <- all_data %>%
  filter(Platform == "Chrome" & Transform == "lazy" & NewMethod == "dynamic" &
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
  filter(Platform == "Chrome" & Transform == "lazy" & NewMethod == "dynamic" &
         EsMode == "sane" & Estimator == "countdown") %>%
  select(Benchmark,RunningTime) %>%
  inner_join(original_chrome, by="Benchmark") %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Slowdown) %>%
  group_by(Benchmark) %>%
  summarise(Mean = mean(Slowdown), CI = ci(Slowdown)) %>%
  ungroup()

es_sane_vs_insane <- rbind(
  conservative %>% mutate(Factor = "Implicit method calls"),
  es_sane %>% mutate(Factor = "No implicit method calls")
)

my_error_bars <- geom_errorbar(
  aes(ymin=Mean-CI/2,ymax=Mean+CI/2), size=0.1, width=.9, 
      position=position_dodge(.9))

plot <- ggplot(es_sane_vs_insane, aes(x=Benchmark,y=Mean,fill=Factor)) +
  my_theme() +
  scale_fill_manual(values=palette) +
  geom_bar(stat="identity", position="dodge") +
  my_error_bars +
  ylab("Slowdown relative to PyJS")
mysave("pyjs_case_study_sane_vs_insane.png", plot)

new_method <- all_data %>%
  filter(Transform == "lazy" & EsMode == "sane" & Estimator == "countdown") %>%
  select(Benchmark,Platform,NewMethod,RunningTime) %>%
  inner_join(original_avgtimes, by=c("Benchmark", "Platform")) %>%
  filter(Platform == "Chrome" | Platform == "Edge") %>%
  mutate(Factor = str_c(Platform, NewMethod, sep = " - ")) %>%
  select(Benchmark,Factor,RunningTime, AvgOriginalTime) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark, Factor, Slowdown) %>%
  group_by(Benchmark,Factor) %>%
  summarise(Mean = mean(Slowdown), CI = ci(Slowdown)) %>%
  ungroup()

plot <- ggplot(new_method, 
               aes(x=Benchmark,y=Mean,fill=Factor)) +
  my_theme() +
  scale_fill_manual(values=palette) +
  geom_bar(stat="identity", position="dodge") +
  my_error_bars +
  ylab("Slowdown relative to PyJS")
mysave("pyjs_case_study_new_method.png", plot)

avg_countdown_interval <- all_data %>% 
  filter(Transform == "lazy" & EsMode == "sane" & Estimator == "countdown" &
         ((Platform == "Chrome" & NewMethod == "desugar") |
          (Platform == "Edge" & NewMethod == "desugar"))) %>%
  mutate(AvgInterval = RunningTime / NumYields) %>%
  select(Benchmark,Platform,Estimator,AvgInterval) %>%
  group_by(Benchmark,Platform,Estimator) %>%
  summarise(Mean = mean(AvgInterval), CI = ci(AvgInterval)) %>%
  ungroup()
avg_velocity_interval <- all_data %>% 
  filter(Transform == "lazy" & EsMode == "sane" & Estimator == "velocity" &
           ((Platform == "Chrome" & NewMethod == "desugar") |
              (Platform == "Edge" & NewMethod == "desugar"))) %>%
  mutate(AvgInterval = RunningTime / NumYields) %>%
  select(Benchmark,Platform,Estimator,AvgInterval) %>%
  group_by(Benchmark,Platform,Estimator) %>%
  summarise(Mean = mean(AvgInterval), CI = ci(AvgInterval)) %>%
  ungroup()

intervals <- rbind(
  avg_countdown_interval %>% mutate(Type = paste(Platform,'-',Estimator)),
  avg_velocity_interval %>% mutate(Type = paste(Platform,'-','sampling'))
)

plot <- ggplot(intervals, aes(x=Benchmark,y=Mean,fill=Type)) +
  my_theme() +
  scale_fill_manual(values=palette) +
  geom_bar(stat="identity", position="dodge") +
  my_error_bars +
  ylab("Average interval between yields")
mysave("pyjs_case_study_interval_variance.png", plot)

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
