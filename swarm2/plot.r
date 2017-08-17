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
             #panel.grid.major = element_blank(),
             #panel.grid.minor = element_blank(),
             panel.grid.major = element_line(colour="gray", size=0.1),
             panel.grid.minor = element_line(colour="gray", size=0.1, linetype='dotted'),
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
  
baseline <- data %>% 
  filter(Transform == "original") %>%
  mutate(BaseTime = RunningTime) %>%
  select(-RunningTime, -Transform, -TargetLatency) %>%
  distinct(Platform, Benchmark, Language, .keep_all = TRUE)

df <- inner_join(baseline,data) %>%
  filter(Transform != "original" & Platform != "node" & TargetLatency  == 100) %>%
  mutate(Slowdown = RunningTime / BaseTime,
         Label = paste(Language,Benchmark),
         Type = paste(Platform,Transform,TargetLatency)) %>%
  select(-Platform,-Transform,-TargetLatency,-RunningTime,-BaseTime,-Language,-Benchmark) %>%
  mutate(Slowdown = ifelse(is.na(Slowdown), 1000, Slowdown))
  
plot <- ggplot(df, aes(x=Slowdown, color=Type)) + stat_ecdf() +
  ylab("% of benchmarks") +
  annotation_custom(textGrob("Timeout", gp = gpar(col = "red")), 
                    xmin=1000, xmax=1000,ymin=-.4, ymax=-.4) +
  scale_x_continuous(breaks = seq(0, 1000, by = 100),
                     minor_breaks = seq(0, 1000, by = 10)) +
  mytheme()

mysave("slowdown.pdf", plot)

# df <- data %>%
#   mutate(Type = paste(Platform,Transform,TargetLatency)) %>%
#   mutate(Label = paste(Language,Benchmark)) %>%
#   select(-Platform,-Transform,-TargetLatency,-Language,-Benchmark)

# plot <- ggplot(df, aes(x=Label,y=RunningTime)) +
#   geom_bar(position="dodge", aes(fill=Type),stat="identity") +
#   ylab("Time (ms)") + mytheme()

# mysave("data.pdf", plot)


# write.table(df, quote= FALSE,sep=",",row.names=FALSE)
# plot <- ggplot(df, aes(x=Label,y=Slowdown)) +
#   geom_bar(position="dodge", aes(fill=Type),stat="identity") +
#   ylab("Slowdown") +
  
#   mytheme()


