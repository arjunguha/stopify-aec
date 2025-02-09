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
             legend.position = c(0.7, .2),
             legend.background = element_blank()))
}

# Reads .CSV file, excludes native and Pyret results, relabels languages, and
# relabels browsers.
read_data <- function(filename) {

  all_languages <- c(
    "python_pyjs",
    "clojurescript",
    "scala",
    "c++",
    "java",
    "scheme",
    "dart_dart2js",
    "javascript",
    "ocaml"
  )
  
  all_data <- read_csv(filename) %>%
    filter(Language %in% all_languages) %>%
    filter(Platform != "native") %>%
    mutate(Platform  = fct_recode(Platform, 
                                  "Chrome" = "chrome", 
                                  "Edge" = "MicrosoftEdge",
                                  "Safari" = "safari",
                                  "Firefox" = "firefox"),
           Language = fct_recode(Language,
                                 "Python (PyJS)" = "python_pyjs",
                                 "Clojure (ClojureScript)" = "clojurescript",
                                 "Scala (ScalaJS)" = "scala",
                                 "C++ (Emscripten)" = "c++",
                                 "Java (JSweet)" = "java",
                                 "Scheme (scheme2js)" = "scheme",
                                 "Dart (dart2js)" = "dart_dart2js",
                                 "JavaScript" = "javascript",
                                 "OCaml (BuckleScript)" = "ocaml")) %>%
    mutate(Platform = fct_relevel(Platform, "Chrome", "Safari", "Edge", "Firefox", "ChromeBook")) %>%
    mutate(Platform = droplevels(Platform), Language = droplevels(Language))
  
  return (all_data)
}

all_data <- read_data("../results.csv")
  
all_platforms <- c("firefox", "chrome", "MicrosoftEdge", "ChromeBook", "safari")

original <- all_data %>%
  filter(Transform == "original") %>%
  select(Benchmark,Language,Platform,RunningTime)

original_avgtimes <- original %>%
  group_by(Benchmark, Language, Platform) %>%
  summarise(AvgOriginalTime = mean(RunningTime)) %>%
  ungroup()

selector <- tribble(
  ~Platform, ~Transform, ~NewMethod,
  "Firefox", "lazy", "direct", 
  "Chrome", "lazy", "wrapper", 
  "Edge", "retval", "direct",
  "Safari", "lazy", "direct",
  "ChromeBook", "lazy", "wrapper") %>%
  mutate(Platform = as.factor(Platform)) %>%
  mutate(Platform = fct_relevel(Platform, "Chrome", "Safari", "Edge", "Firefox", "ChromeBook"))

args_baseline <- all_data %>% filter(Benchmark=='arguments' & JsArgs=='simple') %>%
  select(Benchmark,Language,Platform,RunningTime,Transform)
arith_baseline <- all_data %>% filter(Benchmark=='arithmetic' & EsMode=='sane') %>%
  select(Benchmark,Language,Platform,RunningTime,Transform)
new_baseline <- all_data %>% filter(Benchmark=='constructor' & NewMethod=='direct') %>%
  select(Benchmark,Language,Platform,RunningTime,Transform)
loop_baseline <- all_data %>% filter(Benchmark=='loop' & Transform=='lazy') %>%
  select(Benchmark,Language,Platform,RunningTime,Transform)
micro_baseline <- full_join(args_baseline, arith_baseline) %>%
  full_join(new_baseline) %>% full_join(loop_baseline) %>%
  group_by(Benchmark,Language,Platform) %>%
  summarize(AvgOriginalTime=mean(RunningTime)) %>%
  ungroup()

micro_slowdowns <- all_data %>% filter(Transform != 'original' & Transform != 'native') %>%
  filter(Estimator == 'reservoir') %>%
  filter(Language == 'microbenches') %>%
  filter(JsArgs=='faithful' | EsMode=='es5' | (Benchmark=='constructor' & NewMethod=='wrapper') |
           (Benchmark=='loop' & Transform=='retval')) %>%
  inner_join(micro_baseline) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark,Platform,Language,Slowdown,Transform,JsArgs,EsMode,NewMethod)

args <- micro_slowdowns %>% filter(Benchmark=='arguments') %>%
  mutate(Type=paste(Benchmark,'-',JsArgs))
arith <- micro_slowdowns %>% filter(Benchmark=='arithmetic') %>%
  mutate(Type=paste(Benchmark,'-',EsMode))
new <- micro_slowdowns %>% filter(Benchmark=='constructor') %>%
  mutate(Type=paste(Benchmark,'-',NewMethod))
loop <- micro_slowdowns %>% filter(Benchmark=='loop') %>%
  mutate(Type=paste(Benchmark,'-',Transform))

micro_slowdowns <- full_join(args, arith) %>% full_join(new) %>% full_join(loop)

slowdowns <- all_data %>%
  filter(Transform != "original" & Transform != "native") %>%
  filter(Estimator == "velocity") %>%
  filter(YieldInterval == 100) %>%
  inner_join(original_avgtimes) %>%
  inner_join(selector) %>%
  filter((Language == "JavaScript" & EsMode == "es5" & JsArgs == "full") |
         (Language != "JavaScript" & EsMode == "sane")) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark,Platform,Language,Slowdown)


calc_ecdf <- function(language, platform, .max) {
  df <- slowdowns %>% 
    filter(Language == language & Platform == platform)
  if (nrow(df) == 0) {
    return (tribble(~Language, ~Platform, ~x, ~y))
  }
  f <- ecdf(df$Slowdown)
  return (tibble(0:.max) %>%
    `colnames<-`(c("x")) %>%
    mutate(y = f(x), Language = language, Platform = platform))
}

language_calc_ecdf <- function(language) {
  du <- slowdowns %>% filter(Language == language)
  if (nrow(du) == 0) {
    return (tribble(~Language, ~Platform, ~x, ~y))
  }
  maxSlowdown <- ceiling(max(du$Slowdown))
  df <- bind_rows(lapply(levels(as.factor(slowdowns$Platform)), function(p) calc_ecdf(language, p, maxSlowdown)))
  
  return (df %>% filter(x <= maxSlowdown) %>% mutate(Platform = factor(Platform)))
}

# Filtered by Language and Platform, this is an ECDF of the slowdown incurred
# by Stopify.
slowdown_ecdf <- bind_rows(lapply(levels(slowdowns$Language), language_calc_ecdf))

grouped_medians <- slowdowns %>% group_by(Language, Platform) %>% 
  summarize(.median = median(Slowdown)) %>% 
  ungroup()

mean_slowdowns <- slowdowns %>%
  group_by(Benchmark,Platform,Language) %>%
  summarize(.mean = mean(Slowdown),
            .ci = 1.96 * sd(Slowdown) / sqrt(length(Slowdown)))

num_benchmarks <- mean_slowdowns %>%
  group_by(Benchmark,Language) %>%
  summarize(NumPlatforms=length(Platform)) %>%
  ungroup() %>%
  filter(NumPlatforms==5) %>%
  group_by(Language) %>%
  summarize(NumBenchmarks=length(Language))

summary_stats <- function() {
  F <- function(platform,lang) {
    f <- ecdf((slowdowns %>% filter(Platform == platform & Language==lang))$Slowdown)
    g <- inverse(f, lower=0, upper=100)
    cat(paste0(round(g(.95), digits = 1), "x"))
  }
  for (platform in all_platforms) {
    cat(paste0(" & ", platform))
  }
  cat("\\\\\n")
  for (lang in all_languages) {
    cat(lang)
    for (platform in all_platforms) {
      cat(" & ")
      try(F(platform, lang), silent=T)
    }
    cat("\\\\\n")
  }
}
  
# summary_stats()

platform_ecdf <-function(lang,platform) {
  f <- ecdf((slowdowns %>% filter(Language == lang & Platform == platform))$Slowdown)
  g <- inverse(f, lower=0, upper=100)
  cat(paste0("\\newcommand{\\", gsub("_", "", lang), platform,"95}{", round(g(.95), digits = 1),"x}\n"))
}

language_ecdf <- function(lang) {
  df <- language_calc_ecdf(lang)
  # Draw 20 evenly-spaced shapes along the lines
  df_points <- df %>% group_by(Platform) %>% filter(x %% ceiling(last(x)/20) == 0)

  # Add medians to labels
  labels <- lapply(levels(df$Platform), function(p) 
    sprintf("%s (%.1f)", p,
            (grouped_medians %>% filter(Language == lang & Platform == p))$.median))

  plot <- ggplot(df, aes(x=x,y=y,color=Platform,shape=Platform)) +
    geom_line() +
    geom_point(data = df_points) +
    scale_color_manual(labels=labels, values=palette) +
    scale_shape_manual(labels=labels,values=c(0,1,2,4,5)) +
    theme_bw() +
    theme(
      panel.background = element_rect(size = 0.9),
      plot.title = element_text(size=8,hjust=0.5,vjust=-1),
      text = element_text(family="serif", size=8),
      panel.grid.major = element_line(colour="gray", size=0.1),
      panel.grid.minor =
        element_line(colour="gray", size=0.1, linetype='dotted'),
      axis.ticks = element_line(size=0.05),
      axis.ticks.length=unit("-0.05", "in"),
      axis.text.y = element_text(margin = margin(r = 5)),
      axis.text.x = element_text(margin = margin(t = 5)),
      legend.key = element_rect(colour=NA),
      legend.margin = margin(unit(0.001, "in")),
      # legend.key.size = unit(0.2, "in"),
      legend.key.height = unit(0.09, "in"),
      legend.title = element_blank(),
      legend.position = c(0.7, .3),
      legend.background = element_blank()) +
    labs(title=lang, y = "% of trials", x = "Slowdown")
  return (plot)
}

ecdf_grid <- function() {
  plots <- lapply(slowdowns$Language %>% levels(), language_ecdf)
  return (do.call("grid.arrange", c(plots, ncol=3)))
}

all_slowdowns <- ecdf_grid()
ggsave("all_slowdowns.png", all_slowdowns, width=7, height=5, units="in")
