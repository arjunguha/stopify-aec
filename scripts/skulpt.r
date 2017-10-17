#!/usr/bin/env Rscript
source("./lib.r")

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

skulpt_runtime <- function(timing) {
  print(timing)
  df <- timing %>% group_by(Benchmark) %>%
    summarise(Mean=mean(RunningTime),Min=min(RunningTime),Max=max(RunningTime)) %>%
    ungroup()
  df <- df %>% mutate(Type=paste(Benchmark,'skulpt','chrome'))

  print(df)
  return (df)
}

stopify_runtime <- function(timing) {
  df <- timing %>% mutate(Type = paste(Benchmark,Transform,Platform),
                          Mean = RunningTime, Min=NA, Max=NA) %>%
    select(Benchmark,Type,Mean,Min,Max)

  return (df)
}

python_runtimes <- function(timing) {
  a <- timing %>% filter(Transform == "lazy") %>% filter(Platform == "chrome") %>%
    filter(Language == "python_pyjs") %>%
    filter(Benchmark != "raytrace_simple" & Benchmark != "deltablue" & Benchmark != "richards" & Benchmark != "b")
  b <- timing %>% filter(Transform == "skulpt")
  stopify <- stopify_runtime(a)
  skulpt <- skulpt_runtime(b)
  df <- full_join(stopify, skulpt)
  return (df)
}

df <- python_runtimes(data)

plot <- ggplot(df, aes(x=Type, color=Benchmark, y=Mean, ymin=Min, ymax=Max)) +
  geom_bar(position="dodge", aes(fill=Benchmark),stat="identity") +
  geom_errorbar(color="black") +
  ylab("Running Time (ms)") +
  xlab("Benchmark") +
  mytheme()

mysave("runtimes.jpg", plot)
