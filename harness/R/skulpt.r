#!/usr/bin/env Rscript
source("./theme.R")

sources <- commandArgs(TRUE)

if (length(sources) == 0) {
  stop("Expected sources on comand line")
}

read_runtimes <- function(source) {
  df <- read_csv(source) %>%
    select(Platform,Transform, Benchmark, Language, RunningTime) %>%
    mutate(Source = source)
  return(df)
}

data <- NA
for (source in sources) {
  aData <- read_runtimes(source)
  if (is.na(data)) {
    data <- aData
  } else {
    data <- rbind(data, aData)
  }
}

python_runtimes <- function(timing) {
  a <- timing %>% filter(Transform == "lazy") %>% filter(Platform == "chrome") %>%
    filter(Language == "python_pyjs") %>%
    filter(Benchmark != "raytrace_simple" & Benchmark != "deltablue" & Benchmark != "richards" & Benchmark != "b")
  b <- timing %>% filter(Transform == "skulpt") %>%
    select(Platform,Benchmark,RunningTime)

  baseline <- a %>% mutate(Base = RunningTime) %>%
    select(Platform,Benchmark,Base)

  arel <- a %>% mutate(Relative=1)
  brel <- inner_join(baseline, b) %>% mutate(Relative = RunningTime / Base) %>%
    select(Platform,Benchmark,Relative)

  amean <- arel %>% mutate(Mean=Relative,Min=NA,Max=NA,Transform="lazy") %>%
    select(Benchmark,Mean,Min,Max,Transform)
  bmean <- brel %>% group_by(Benchmark) %>%
    summarize(Mean=mean(Relative),Min=min(Relative),Max=max(Relative),Transform="skulpt") %>%
    ungroup() %>%
    select(Benchmark,Mean,Min,Max,Transform)

  df <- full_join(amean, bmean)
  return (df)
}

df <- python_runtimes(data)

plot <- ggplot(df, aes(x=Benchmark, fill=Transform, y=Mean, ymin=Min, ymax=Max)) +
  geom_bar(position="dodge",stat="identity") +
  geom_errorbar(position="dodge", color="black") +
  ylab("Slowdown") +
  xlab("Benchmark") +
  mytheme()

mysave("runtimes.jpg", plot)
