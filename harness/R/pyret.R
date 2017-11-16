library(tidyverse)

all_data <- read_csv("../results.csv") %>%
  filter(Language == "pyret" | Language == "pyret_deepstacks") %>%
  select(Benchmark,RunningTime,Platform,Transform,NumYields) %>%
  mutate(Transform = if_else(Transform == "native", "without Breakout",
                             if_else(Transform == "original",
                                     "no yields",
                                     "with Breakout"))) %>%
  filter(Benchmark != "tail-sum-1000000" & Benchmark != "method-calls-nolists-1000000" & Benchmark != "mutable-string-dict-grow-100000" & Benchmark != "bignum-factorial-20000") %>%
  mutate(Platform  = fct_recode(Platform, 
                                "Chrome" = "chrome", 
                                "Edge" = "MicrosoftEdge",
                                "Safari" = "safari",
                                "Firefox" = "firefox")) %>%
  mutate(Platform = fct_relevel(Platform, "Chrome", "Safari", "Edge", "Firefox", "ChromeBook")) %>%
  mutate(Platform = droplevels(Platform))


without_avgtimes <- all_data %>%
  filter(Transform == "without Breakout") %>%
  group_by(Benchmark, Platform) %>%
  summarise(MeanOriginal = mean(RunningTime)) %>%
  ungroup() %>%
  select(Benchmark, Platform, MeanOriginal)

slowdowns <- all_data %>%
  filter(Transform == "with Breakout") %>%
  inner_join(without_avgtimes) %>%
  mutate(Slowdown = RunningTime / MeanOriginal) %>%
  select(Benchmark, Platform, Slowdown)

calc_ecdf <- function(platform, .max) {
  df <- slowdowns %>% 
    filter(Platform == platform)
  if (nrow(df) == 0) {
    return (tribble(~Language, ~Platform, ~x, ~y))
  }
  f <- ecdf(df$Slowdown)
  return (tibble(0:.max) %>%
            `colnames<-`(c("x")) %>%
            mutate(y = f(x), Platform = platform))
}


palette <- c("#999999", "#E69F00", "#56B4E9", "#009E73", "#D55E00", "#CC79A7")

maxSlowdown <- ceiling(max(slowdowns$Slowdown))
df <- bind_rows(lapply(levels(slowdowns$Platform), function(p) calc_ecdf(p, maxSlowdown))) %>%
    mutate(Platform = as.factor(Platform))
# Draw 20 evenly-spaced shapes along the lines
df_points <- df %>% group_by(Platform) %>% filter(x %% ceiling(last(x)/20) == 0)

grouped_medians <- slowdowns %>% group_by(Platform) %>% 
  summarize(.median = median(Slowdown)) %>% 
  ungroup()

# Add medians to labels
labels <- lapply(levels(df$Platform), function(p) 
  sprintf("%s (%.1f)", p,
          (grouped_medians %>% filter(Platform == p))$.median))

plot <- ggplot(df, aes(x=x,y=y,color=Platform,shape=Platform)) +
  geom_line() +
  geom_point(data = df_points,stroke=1,size=2.5) +
  scale_color_manual(labels=labels, values=palette) +
  scale_shape_manual(labels=labels,values=c(0,1,2,4,5)) +
  theme_bw() +
  theme(
    panel.background = element_rect(size = 0.9),
    text = element_text(family="serif", size=12),
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
    legend.key.height = unit(0.15, "in"),
    legend.title = element_blank(),
    legend.position = c(0.7, .3),
    legend.background = element_blank()) +
  labs(y = "% of trials", x = "Slowdown")

ggsave("pyret_slowdown.pdf", width = 5, height = 3, units=c("in"))
# return (plot)
# # ggplot(slowdowns, aes(x=Benchmark,y=.mean,fill=Platform)) + 
# #   geom_bar(position = "dodge", stat="identity") + 
# #   geom_errorbar(
# #     aes(ymin=.mean-.ci/2,ymax=.mean+.ci/2), size=0.3, width=.9, 
# #     position=position_dodge(.9)) +
# #   theme(             axis.text.x = element_text(hjust = 1, angle=60))
# # 
# #   filter(Slowdown < 100)
# 
# ggplot(slowdowns, aes(x = Slowdown, color=Platform)) +
#   stat_ecdf()
# 
# plot_pyret <- function (lang) {
#   all_data <- read_csv("../results.csv") %>%
#     filter(Language == lang) %>%
#     select(Benchmark,RunningTime,Platform,Transform,NumYields) %>%
#     mutate(Transform = if_else(Transform == "native", "without Breakout",
#                                if_else(Transform == "original",
#                                        "no yields",
#                                        "with Breakout")))
# 
#   without_avgtimes <- all_data %>%
#     filter(Transform == "without Breakout") %>%
#     group_by(Benchmark, Platform) %>%
#     summarise(MeanOriginal = mean(RunningTime)) %>%
#     ungroup() %>%
#     select(Benchmark, Platform, MeanOriginal)
# 
#   slowdowns <- all_data %>%
#     filter(Transform == "with Breakout") %>%
#     inner_join(without_avgtimes) %>%
#     mutate(Slowdown = RunningTime / MeanOriginal)
# 
#   ggplot(slowdowns, aes(x = Slowdown, color=Platform)) +
#     stat_ecdf()
# 
#   ggsave(paste(lang, "_slowdown.pdf", sep=""), width=5, height=5, units=c("in"))
# 
#   stats <- function (plat) {
#     print(plat)
#     print(mean((slowdowns %>% filter(Platform == plat))$Slowdown))
#     print(sd((slowdowns %>% filter(Platform == plat))$Slowdown))
#   }
# 
#   stats("chrome")
#   stats("safari")
#   stats("firefox")
#   stats("MicrosoftEdge")
# }
# 
# plot_pyret("pyret_deepstacks")
# plot_pyret("pyret")
