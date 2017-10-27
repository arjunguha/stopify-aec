#!/usr/bin/env Rscript
source("./theme.R")

sources <- commandArgs(TRUE)

if (length(sources) == 0) {
  stop("Expected sources on comand line")
}

read_runtimes <- function(source) {
  df <- read_csv(source) %>% filter(Transform != 'original' & Language == 'microbenches') %>%
    select(Platform,Transform, Benchmark, Language, JsArgs,EsMode, NewMethod, RunningTime)
  return(df)
}

type <- function(data) {
  args <- data %>% filter(Benchmark == 'arguments') %>%
    mutate(Type=paste(Platform,JsArgs))
  arith <- data %>% filter(Benchmark == 'arithmetic') %>%
    mutate(Type=paste(Platform,EsMode))
  ctor <- data %>% filter(Benchmark == 'constructor') %>%
    mutate(Type=paste(Platform,NewMethod))

  df <- full_join(args,arith) %>% full_join(ctor) %>%
    select(Platform,Transform,Benchmark,Language,JsArgs,EsMode,NewMethod,RunningTime,Type)

  return (df)
}

relatives <- function(baseline, data) {
  df <- inner_join(baseline, data) %>% mutate(Relative=RunningTime/Base)

  return (df)
}

rel_means <- function(data) {
  df <- data %>% group_by(Type,Benchmark) %>%
    summarize(Mean=mean(Relative),Min=min(Relative),Max=max(Relative)) %>%
    ungroup()

  return (df)
}

runtime_means <- function(data) {
  df <- data %>% group_by(Type,Benchmark,Platform) %>%
    summarize(Mean=mean(RunningTime),Min=min(RunningTime),Max=max(RunningTime)) %>%
    ungroup()

  return (df)
}

data <- read_runtimes("micro.csv")

ff_to_chrome_relative_runtimes <- function(timing) {
  chrome <- data %>% filter(Platform == 'chrome') %>%
    type()
  firefox <- data %>% filter(Platform == 'firefox') %>%
    type()

  baseline <- chrome %>% mutate(Base=RunningTime) %>%
    select(Transform,Benchmark,Language,JsArgs,EsMode,NewMethod,Base)

  chrome_rel <- chrome %>% mutate(Relative=1)
  ff_rel <- relatives(baseline, firefox)

  chrome_means <- chrome_rel %>% rel_means()
  ff_means <- ff_rel %>% rel_means()

  df <- ff_means
  return (df)
}

bench_runtimes <- function(timing, bench) {
  df <- timing %>% type() %>% filter(Benchmark == bench) %>% runtime_means()

  return (df)
}

ff_rel_plot <- function(df) {
  ggplot(df, aes(x=Benchmark, y=Mean, ymin=Min, ymax=Max, fill=Type)) +
    geom_bar(position="dodge",stat="identity") +
    geom_errorbar(position="dodge", color="black") +
    ylab("Firefox Slowdown Relative to Chrome") +
    xlab("Benchmark") +
    mytheme()
}

runtime_plot <- function(df, label) {
  ggplot(df, aes(x=Platform, y=Mean, ymin=Min, ymax=Max, fill=Type)) +
    geom_bar(position="dodge",stat="identity") +
    geom_errorbar(position="dodge", color="black") +
    ylab("Mean Runtime (ms)") +
    xlab(paste(label," Benchmark")) +
    mytheme()
}

df <- ff_to_chrome_relative_runtimes(data)
d_args <- bench_runtimes(data, 'arguments')
d_arith <- bench_runtimes(data, 'arithmetic')
d_ctor <- bench_runtimes(data, 'constructor')

ff_rel_plot(df)
runtime_plot(d_args, 'Arguments')
runtime_plot(d_arith, 'Arithmetic')
runtime_plot(d_ctor, 'Constructor')
