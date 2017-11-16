library(tidyverse)
library(forcats)
library(GoFKernel)
library(stringr)
library(extrafont)
library(fontcm)
library(gridExtra)

mean_table <- function (table, transform, language) {
  ret <- table %>%
    filter(Transform == transform) %>%
    filter(Language == language) %>%
    group_by(Benchmark, Platform) %>%
    summarise(MeanOriginal = mean(RunningTime)) %>%
    ungroup() %>%
    select(Benchmark, Platform, MeanOriginal)
  
  return(ret)
}

plot_language <- function(data, language) {
  native_times <- read_csv(paste("../native/", language, "-native.csv", sep=""))
  
  original_m <- mean_table(all_data, 'original', language)
  native_m <- mean_table(native_times, 'native', language) %>%
    mutate(MeanNative = MeanOriginal) %>%
    select(Benchmark, MeanNative)
  
  slowdown <- original_m %>% 
    inner_join(native_m) %>%
    mutate(Slowdown = MeanOriginal / MeanNative) %>%
    select(Benchmark, Platform, Slowdown)
  
  return(slowdown)
}

all_data <- read_csv("../results.csv")

a <- plot_language(all_data, "ocaml")
b <- plot_language(all_data, "c")