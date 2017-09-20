#!/usr/bin/env Rscript
library(tidyverse)
library(stringr)
library(readr)

native_pyjs_commands <- as.tibble(cbind(Command = 
  Sys.glob("../python_pyjs/*") %>%
    keep(function(f) { return (file.info(f)$isdir & !str_detect(f, "js-build")) }) %>%
    map(function(f) { return (str_c("python ", f, "/main.py")) }) %>%
    unlist)) %>%
  mutate(
    Language = "python",
    Transform = "native",
    Benchmark = str_match(Command, "^.*/([^/]*)/main.py$")[,2]
  )

my_system <- function(cmd) {
  print(str_c("Running ", cmd))
  t <- system.time(system(cmd))
  r <- as.integer(1000 * unname(t["elapsed"])) # wall-clock time, convert to ms
  print(str_c("Completed in ", r, "ms."))
  return (r)
}

time_command <- function(df) {
  return (df %>% 
    slice(rep(1:n(), each=10)) %>% # 10 times each
    rowwise() %>%
    mutate(RunningTime = my_system(Command)))
}

result <- time_command(native_pyjs_commands)
write_rds(result, path = "native.rdata")