library(tidyverse)
library(forcats)
library(GoFKernel)
library(stringr)
library(extrafont)
library(fontcm)
library(gridExtra)
library(xtable)

palette <- c("#999999", "#E69F00", "#56B4E9", "#009E73", "#D55E00", "#CC79A7")

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

all_data <- read_csv("../results.csv") 

calc_slowdown <- function(language) {
  native_times <- read_csv(paste("../native/", language, "-native.csv", sep=""))
  
  original_m <- mean_table(all_data, 'original', language)
  native_m <- mean_table(native_times, 'native', language) %>%
    mutate(MeanNative = MeanOriginal) %>%
    select(Benchmark, MeanNative)
  
  slowdown <- original_m %>% 
    inner_join(native_m) %>%
    mutate(Slowdown = MeanOriginal / MeanNative, Language = language) %>%
    group_by(Benchmark) %>%
    filter(length(Benchmark) == 5) %>%
    ungroup()
  
  chrome <- slowdown %>%
    filter(Platform == 'chrome') %>%
    mutate(Chrome = Slowdown) %>% 
    select(Language, Benchmark, Chrome)
  
  safari <- slowdown %>%
    filter(Platform == 'safari') %>%
    mutate(Safari = Slowdown) %>% 
    select(Language, Benchmark, Safari)
  
  firefox <- slowdown %>%
    filter(Platform == 'firefox') %>%
    mutate(Firefox = Slowdown) %>% 
    select(Language, Benchmark, Firefox)
  
  chromebook <- slowdown %>%
    filter(Platform == 'ChromeBook') %>%
    mutate(ChromeBook = Slowdown) %>% 
    select(Language, Benchmark, ChromeBook)
  
  edge <- slowdown %>%
    filter(Platform == 'MicrosoftEdge') %>%
    mutate(Edge = Slowdown) %>% 
    select(Language, Benchmark, Edge)
  
  ret <- chrome %>%
    inner_join(safari) %>%
    inner_join(firefox) %>% 
    inner_join(chromebook) %>%
    inner_join(edge)
  
  return(ret)
}

a <- calc_slowdown("ocaml")
b <- calc_slowdown("c++")
c <- calc_slowdown("dart_dart2js")
d <- calc_slowdown("java")
e <- calc_slowdown("scheme")
f <- calc_slowdown("scala")
g <- calc_slowdown("clojurescript")

k <- rbind(a, b, c, d, e, f, g)

tbl <- xtable(format.data.frame(k, digits=2, scientific=FALSE),
	      align=c('|l','|l','|r','|r','|r', '|r', '|r', '|r|'),
	      label='tbl:native',
	      caption='Slowdown of benchmarks when compiled to JavaScript, with respect to native running time')

print.xtable(tbl, 
	     file="native.tex", 
	     include.rownames = F, size='\\small',
	     floating.environment = 'figure*',
	     sanitize.text.function = function (x) {return(gsub("_","-",x))},
	     sanitize.rownames.function = NULL,
             scalebox = 0.75,
	     sanitize.colnames.function = function(x) {
		x
	     })
