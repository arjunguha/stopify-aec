#!/usr/bin/env Rscript
library(tidyverse)
library(forcats)
library(GoFKernel)
library(stringr)
library(extrafont)
library(fontcm)
library(gridExtra)

palette <- c("#999999", "#E69F00", "#56B4E9", "#009E73", "#D55E00", "#CC79A7")

# Theme for output
mytheme <- function() {
  return(theme_bw() +
           theme(
             panel.background = element_rect(size = 0.9),
             text = element_text(family="serif", size=16),
             panel.grid.major = element_line(colour="gray", size=0.1),
             panel.grid.minor =
               element_line(colour="gray", size=0.1, linetype='dotted'),
             axis.ticks = element_line(size=0.05),
             axis.ticks.length=unit("-0.05", "in"),
             axis.text.y = element_text(margin = margin(r = 5)),
             axis.text.x = element_text(margin = margin(t = 5)),
             legend.key = element_rect(colour=NA),
             legend.margin = margin(unit(0.001, "in")),
             legend.key.size = unit(0.2, "in"),
             legend.title = element_blank(),
             legend.position = c(0.75, 0.45),
             legend.background = element_blank()))
}

read_data <- function(filename) {
  
  # Excludes JS
  all_languages <- c(
    "python_pyjs",
    "clojurescript",
    "scala",
    "c++",
    "java",
    "scheme",
    "dart_dart2js",
    "ocaml"
  )
  
  all_data <- read_csv(filename) %>%
    filter(Language %in% all_languages) %>%
    filter(Platform == "native" | Transform == "original") %>%
    filter(Platform == "chrome" | Platform == "firefox" | Platform == "native") %>%
    mutate(Platform  = fct_recode(Platform,
                                  "Native" = "native",
                                  "Chrome" = "chrome",
                                  "Firefox" = "firefox"),
           Language = fct_recode(Language,
                                 "Python (PyJS)" = "python_pyjs",
                                 "Clojure (ClojureScript)" = "clojurescript",
                                 "Scala (ScalaJS)" = "scala",
                                 "C++ (Emscripten)" = "c++",
                                 "Java (JSweet)" = "java",
                                 "Scheme (scheme2js)" = "scheme",
                                 "Dart (dart2js)" = "dart_dart2js",
                                 "OCaml (BuckleScript)" = "ocaml")) %>%
    mutate(Platform = fct_relevel(Platform, "Native", "Chrome", "Firefox")) %>%
    mutate(Platform = droplevels(Platform), Language = droplevels(Language)) %>%
    select(Language, Platform, RunningTime, Benchmark)
  return (all_data)
}

all_data <- read_data("../results.csv")

native_avgtimes <- all_data %>%
  filter(Platform == "Native") %>%
  group_by(Benchmark) %>%
  summarise(AvgOriginalTime = mean(RunningTime)) %>%
  ungroup()
  
slowdowns <- all_data %>%
  filter(Platform != "Native") %>%
  inner_join(native_avgtimes) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Platform, Language, Slowdown)

graphic <- ggplot(slowdowns, aes(x=Slowdown, color=Language,linetype=Platform)) + 
  stat_ecdf() +
  labs(y = "% of trials", x = "Slowdown") +
  mytheme()

ggsave("native_slowdowns.pdf", graphic, width=5, height=3, units="in")
