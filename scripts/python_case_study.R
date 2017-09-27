#!/usr/bin/env Rscript
suppressMessages(library(tidyverse))
library(stringr)
source("./theme.R")

timing_csv <- commandArgs(TRUE)

if (length(timing_csv) != 1) {
  cat("Usage: python_case_study.R <timing.csv>\n")
  quit(save = "no", status = 1)
}

all_data <- read_csv(timing_csv)
# all_data <- str_match(Sys.glob(str_c(sources, "/*.done")), 
#   ".*/([^-]*)-([^-]*)-([^-]*)-([^-]*)-([^-]*)-([^-]*)-([^-]*)-\\d.done")
# colnames(all_data) <- c("Filename", "Benchmark", "Platform", "Transform", 
#                           "New", "ES", "Estimator", "YieldInterval")

# read_measurements <- function(filename) {
#   if (is.na(filename)) {
#     return (NA)
#   }
#   lines <- readLines(filename)
#   return (lines[length(lines)])
# }

# all_data <- as.tibble(all_data) %>%
#   na.omit() %>%
#   rowwise() %>% 
#   mutate(Measurement = read_measurements(Filename)) %>%
#   ungroup() %>%
#   na.omit() %>%
#   mutate(
#     RunningTime = str_split(Measurement, fixed(",")) %>% 
#       map(function(x)x[1]) %>% unlist %>% as.integer,
#     NumYields = str_split(Measurement, fixed(",")) %>% 
#       map(function(x)x[2]) %>% unlist %>% as.integer) %>%

# original <- read_rds("results.rdata") %>%
#   filter(Language == "python_pyjs" & Transformation == "original") %>%
#   select(Benchmark, Platform, Transformation, RunningTime) %>%
#   rename(Transform = Transformation, OriginalTime = RunningTime) %>%
#   group_by(Benchmark, Platform) %>%
#   summarise(MeanOriginalTime = mean(OriginalTime)) %>%
#   ungroup()


# df <- all_data %>%
#   filter(Platform == "chrome" & Transform == "lazy" & New == "direct" &
#            Estimator == "countdown") %>%
#   inner_join(original) %>%
#   mutate(Slowdown = RunningTime / MeanOriginalTime) %>%
#   select(Benchmark, ES, Slowdown) %>%
#   group_by(Benchmark, ES) %>%
#   summarise(Mean = mean(Slowdown),
#             Se = sd(Slowdown) / length(Slowdown)) %>%
#   ungroup() %>%
#   mutate(Factor = ifelse(ES == "sane", "No implicit conversions", "Implicit conversions"))

# plot <- ggplot(df, aes(x=Benchmark,y=Mean,fill=Factor)) +
#   mytheme() +
#   geom_bar(stat="identity",position="dodge") +
#   ylab("Slowdown relative to PyJS")
# mysave("file.pdf", plot)
# #   geom_line(color="blue",size=linew) +
#   #   labs(x = "Resources", y = "Time (milliseconds)")
  
  
# ggplot(df, aes(x=)

