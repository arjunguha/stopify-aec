#!/usr/bin/env Rscript
library(tidyverse)
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

all_data <- read_csv("../results.csv")

all_languages <- c(
  "python_pyjs",
  "clojurescript",
  "scala",
  "c++",
  "java",
  "scheme",
  "dart_dart2js",
  "pyret",
  "ocaml"
)

language_labels <- list(
  "python_pyjs" = "Python (PyJS)",
  "clojurescript" = "Clojure (ClojureScript)",
  "scala" = "Scala (ScalaJS)",
  "c++" = "C++ (Emscripten)",
  "java" = "Java (JSweet)",
  "scheme" = "Scheme (scheme2js)",
  "dart_dart2js" = "Dart (dart2js)",
  "pyret" = "Pyret",
  "ocaml" = "OCaml (BuckleScript)"
)

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
  "firefox", "lazy", "direct", "sane",
  "chrome", "lazy", "wrapper", "sane",
  "MicrosoftEdge", "retval", "direct", "sane",
  "safari", "lazy", "direct", "sane",
  "ChromeBook", "lazy", "wrapper", "sane")

slowdowns <- all_data %>%
  filter(Transform != "original" & Transform != "native") %>%
  filter(Estimator == "reservoir") %>%
  filter(YieldInterval == 100) %>%
  inner_join(original_avgtimes) %>%
  inner_join(selector) %>%
  mutate(Slowdown = RunningTime / AvgOriginalTime) %>%
  select(Benchmark,Platform,Language,Slowdown)

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
  
summary_stats()

platform_ecdf <-function(lang,platform) {
  f <- ecdf((slowdowns %>% filter(Language == lang & Platform == platform))$Slowdown)
  g <- inverse(f, lower=0, upper=100)
  cat(paste0("\\newcommand{\\", gsub("_", "", lang), platform,"95}{", round(g(.95), digits = 1),"x}\n"))
}

language_ecdf <- function(lang) {
  df <- slowdowns %>% filter(Language==lang)
  if (length(df) == 0) {
    return (element_blank())
  }
  
  the_title <- unname(unlist(language_labels[lang]))
  plot <- ggplot(df, aes(x=Slowdown,color=Platform)) +
    stat_ecdf() +
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
    labs(title=the_title, y = "% of trials", x = "Slowdown")
  if (lang != "python_pyjs") {
    plot <- plot + theme(legend.position = "none")
  }
  return (plot)
}

ecdf_grid <- function() {
  plots <- lapply(all_languages, language_ecdf)
  return (do.call("grid.arrange", c(plots, ncol=3)))
}

all_slowdowns <- ecdf_grid()
ggsave("all_slowdowns.pdf", all_slowdowns, width=7, height=5, units="in")


# lang_ecdf <- function(lang) {
#   df <- slowdowns %>% filter(Language == lang)
#   max_slowdown <- max(df$Slowdown)
#   f <- function(platform) {
#     du <- as.data.frame(df %>% filter(Platform == platform))
#     return (as_tibble(calc_dkw(du, column="Slowdown", alpha=0.05)) %>%
#       select(x,y,low,high) %>%
#       filter(x <= max_slowdown) %>%
#       mutate(Platform=platform))
#   }
#   return (bind_rows(lapply(all_platforms, f)))
# }

# df <- lang_ecdf("dart_dart2js")
# 
# ggplot(df, aes(x=x,y=y,color=Platform)) + geom_line() + geom_ribbon(aes(ymin=low,ymax=high,alpha=0.001,fill=Platform))

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


for(lang in all_languages) {
  language_bar_plot(lang)
}
