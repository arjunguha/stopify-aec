library(tidyverse)
library(forcats)
library(GoFKernel)
library(stringr)
library(extrafont)
library(fontcm)
library(gridExtra)

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
plot_language <- function(data, language) {
  native_times <- read_csv(paste("../native/", language, "-native.csv", sep=""))
  
  original_m <- mean_table(all_data, 'original', language)
  native_m <- mean_table(native_times, 'native', language) %>%
    mutate(MeanNative = MeanOriginal) %>%
    select(Benchmark, MeanNative)
  
  slowdown <- original_m %>% 
    inner_join(native_m) %>%
    mutate(Slowdown = MeanOriginal / MeanNative, Language = language) %>%
    select(Language, Benchmark, Platform, Slowdown)
  
  return(slowdown)
}
language_bar_plot <- function(df, lang) {
  plot <- ggplot(df, aes(x=Benchmark,y=Slowdown,fill=Platform)) +
    labs(title=lang,y="Slowdown") +
    scale_fill_manual(values=palette) +
    geom_bar(position="dodge", stat="identity") +
    theme_bw() + 
    theme(axis.text.x = element_text(hjust = 1, angle=60),
          text = element_text(family="serif", size=8),
          panel.grid.major = element_line(colour="gray", size=0.1),
          panel.grid.minor =
            element_line(colour="gray", size=0.1, linetype='dotted'),
          axis.ticks = element_line(size=0.05),
          axis.ticks.length=unit("-0.05", "in"),
          axis.text.y = element_text(margin = margin(r = 5)),
          legend.key = element_rect(colour=NA),
          legend.background = element_blank(),
          legend.margin = margin(unit(0.001, "in")),
          legend.key.size = unit(0.1, "in"),
          legend.text = element_text(size=6),
          legend.title = element_blank(),
          plot.title = element_text(size=10,hjust=0.5),
          legend.position = c(0.9, .8))
  return (plot)
}

all_data <- read_csv("../results.csv") 

a <- plot_language(all_data, "ocaml")
b <- plot_language(all_data, "c++")
c <- plot_language(all_data, "dart_dart2js")
d <- plot_language(all_data, "java")
e <- plot_language(all_data, "scheme")
f <- plot_language(all_data, "scala")

k <- rbind(a, b, c, d, e, f)
write.csv(k, "native.csv")