#!/usr/bin/env Rscript
library(tidyverse)
library(forcats)
library(GoFKernel)
library(stringr)
library(extrafont)
library(fontcm)
library(gridExtra)

palette <- c("#999999", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7")

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

all_data <- read_csv("../results.csv") %>%
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
  
all_platforms <- c("firefox", "chrome", "MicrosoftEdge", "ChromeBook", "safari")

original <- all_data %>%
  filter(Transform == "original") %>%
  select(Benchmark,Language,Platform,RunningTime)

original_avgtimes <- original %>%
  group_by(Benchmark, Language, Platform) %>%
  summarise(AvgOriginalTime = mean(RunningTime)) %>%
  ungroup()

selector <- tribble(
  ~Platform, ~Transform, ~NewMethod, ~EsMode,
  "Firefox", "lazy", "direct", "sane",
  "Chrome", "lazy", "wrapper", "sane",
  "Edge", "retval", "direct", "sane",
  "Safari", "lazy", "direct", "sane",
  "ChromeBook", "lazy", "wrapper", "sane") %>%
  mutate(Platform = as.factor(Platform)) %>%
  mutate(Platform = fct_relevel(Platform, "Chrome", "Safari", "Edge", "Firefox", "ChromeBook"))

slowdowns <- all_data %>%
  filter(Transform != "original" & Transform != "native") %>%
  filter(Estimator == "reservoir") %>%
  filter(YieldInterval == 100) %>%
  inner_join(original_avgtimes) %>%
  inner_join(selector) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark,Platform,Language,Slowdown)


calc_ecdf <- function(language, platform) {
  df <- as.data.frame(slowdowns %>% 
    filter(Language == language & Platform == platform) %>%
    select(Slowdown))
  if (nrow(df) == 0) {
    return (tribble(~Language, ~Platform, ~x, ~y))
  }
  return (as_tibble(calc_dkw(df, column = "Slowdown")) %>%
    filter(x < 100) %>%
    select(x, y) %>%
    mutate(Language = language, Platform = platform))
}

language_calc_ecdf <- function(language) {
  du <- slowdowns %>% filter(Language == language)
  if (nrow(du) == 0) {
    return (tribble(~Language, ~Platform, ~x, ~y))
  }
  maxSlowdown <- ceiling(max(du$Slowdown))
  df <- bind_rows(lapply(levels(slowdowns$Platform), function(p) calc_ecdf(language, p)))
  return (df %>% filter(x <= maxSlowdown))
}

slowdown_ecdf <- bind_rows(lapply(levels(slowdowns$Language), language_calc_ecdf))

#ggplot(slowdown_ecdf %>% filter(Language == "Python (PyJS)"), aes(x,y, color=Platform,shape=Platform)) + geom_line() + geom_point()

mean_slowdowns <- slowdowns %>%
  group_by(Benchmark,Platform,Language) %>%
  summarize(.mean = mean(Slowdown),
            .ci = 1.96 * sd(Slowdown) / sqrt(length(Slowdown)))

by_platform <- function(platform) {
  slowdowns <- all_data %>%
    filter(Transform != "original") %>%
    filter(Estimator == "reservoir") %>%
    filter(Platform == platform) %>%
    filter(YieldInterval == 100) %>%
    inner_join(original_avgtimes) %>%
    mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
    filter(Slowdown < 100) %>%
    select(Benchmark,Language,Slowdown) %>%
    mutate(N = 1) %>%
    arrange(Slowdown) %>%
    mutate(Y = cumsum(N))
  return(slowdowns)
  
}

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
  df <- slowdown_ecdf %>% filter(Language == lang)
  df_points <- df %>% filter(x %% 5 == 0) %>% filter(last(y) != y)
  plot <- ggplot(df, aes(x=x,y=y,color=Platform,shape=Platform)) +
    geom_line() +
    geom_point(data = df_points) +
    theme_bw() +
    theme(
      panel.background = element_rect(size = 0.9),
      plot.title = element_text(size=10,hjust=0.5),
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
      legend.position = c(0.7, .4),
      legend.background = element_blank()) +
    labs(title=lang, y = "% of trials", x = "Slowdown")
  # if (lang != "C++ (Emscripten)") {
  #   plot <- plot + theme(legend.position = "none")
  # }
  return (plot)
}

ecdf_grid <- function() {
  plots <- lapply(slowdowns$Language %>% levels(), language_ecdf)
  return (do.call("grid.arrange", c(plots, ncol=3)))
}

all_slowdowns <- ecdf_grid()
ggsave("all_slowdowns.pdf", all_slowdowns, width=7, height=5, units="in")



language_bar_plot <- function(lang) {
  df <- mean_slowdowns %>% filter(Language == lang)
  plot <- ggplot(df, aes(x=Benchmark,y=.mean,fill=Platform)) +
    geom_bar(position="dodge", stat="identity") +
    geom_errorbar(
      aes(ymin=.mean-.ci/2,ymax=.mean+.ci/2), size=0.3, width=.9, 
      position=position_dodge(.9)) +
    theme_bw() + 
    theme(axis.text.x = element_text(hjust = 1, angle=60),
          text = element_text(family="serif", size=16),
          panel.grid.major = element_line(colour="gray", size=0.1),
          panel.grid.minor =
            element_line(colour="gray", size=0.1, linetype='dotted'),
          axis.ticks = element_line(size=0.05),
          axis.ticks.length=unit("-0.05", "in"),
          axis.text.y = element_text(margin = margin(r = 5)),
          legend.key = element_rect(colour=NA),
          legend.background = element_blank(),
          legend.margin = margin(unit(0.001, "in")),
          legend.key.size = unit(0.2, "in"),
          legend.title = element_blank(),
          legend.position = c(0.9, .8))
  ggsave(paste0("detailed-slowdown-", lang, ".pdf"), plot, width=7, height=5, units=c("in"))
}


# for(lang in all_languages) {
#   language_bar_plot(lang)
# }
