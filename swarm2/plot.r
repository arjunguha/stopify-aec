library("ggplot2")
library(sitools)
library(scales)
library(dplyr)
library(grid)
library(extrafont)
library(reshape2)
library(fontcm)
library(extrafont)

linew <- 0.9
mytheme <- function() {
  return(theme_bw() +
           theme(
             panel.background = element_rect(size = 0.9),
             text = element_text(family = "CM Roman", size=10),
             panel.grid.major = element_blank(),
             panel.grid.minor = element_blank(),
             axis.ticks = element_line(size=0.05),
             axis.ticks.length=unit("-0.05", "in"),
             axis.ticks.margin=unit("0.2", "in"),
             axis.text.y = element_text(margin = margin(r = 5)),
             axis.text.x = element_text(margin = margin(t = 5), angle=90),
             legend.key = element_rect(colour=NA),
             legend.margin = unit(0.001, "in"),
             legend.key.size = unit(0.2, "in"),
             legend.title = element_blank(),
             legend.position = c(0.9, .7),
             legend.text = element_text(family = "CM Roman", size=8),
             legend.background = element_blank()))
}

mysave <- function(filename, plot) {
  ggsave(filename, plot, width=8, height=8, units=c("in"))
  embed_fonts(filename)
}

data <- read.csv("data.csv",header = TRUE) %>%
  select(-Path,-Hostname,-NumYields)

df <- data %>%
  mutate(Type = paste(Platform,Transform,YieldInterval)) %>%
  mutate(Label = paste(Language,Benchmark)) %>%
  select(-Platform,-Transform,-YieldInterval,-Language,-Benchmark)

plot <- ggplot(df, aes(x=Label,y=RunningTime)) +
  geom_bar(position="dodge", aes(fill=Type),stat="identity") +
  ylab("Time (ms)") + mytheme()

mysave("data.pdf", plot)

baseline <- data %>% 
  filter(Transform == "original") %>%
  mutate(BaseTime = RunningTime) %>%
  select(-RunningTime, -Transform, -YieldInterval) %>%
  distinct(Platform, Benchmark, Language, .keep_all = TRUE)

df <- inner_join(baseline,data) %>%
  filter(Transform != "original") %>%
  mutate(Slowdown = RunningTime / BaseTime,
         Label = paste(Language,Benchmark),
         Type = paste(Platform,Transform,YieldInterval)) %>%
  select(-Platform,-Transform,-YieldInterval,-RunningTime,-BaseTime,-Language,-Benchmark)

plot <- ggplot(df, aes(x=Label,y=Slowdown)) +
  geom_bar(position="dodge", aes(fill=Type),stat="identity") +
  ylab("Slowdown") +
  mytheme()

mysave("slowdown.pdf", plot)

