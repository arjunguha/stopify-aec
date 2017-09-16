library(tidyverse)
library(stringr)
library(scales)
library(grid)
library(extrafont)
library(fontcm)

# Theme for output
mytheme <- function() {
  return(theme_bw() +
           theme(
             panel.background = element_rect(size = 0.9),
             text = element_text(family = "CM Roman", size=10),
             #panel.grid.major = element_blank(),
             #panel.grid.minor = element_blank(),
             panel.grid.major = element_line(colour="gray", size=0.1),
             panel.grid.minor =
                 element_line(colour="gray", size=0.1, linetype='dotted'),
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
}

# Edit this if needed
run_configurations <- tribble(
  ~Platform, ~Transformation, ~NewMethod, ~Estimator, ~TimePerElapsed, ~YieldInterval,
  "chrome", "lazy", "wrapper", "reservoir", NA, 100,
  "firefox", "lazy", "direct", "reservoir", NA, 100
)

compile_configurations <- as_tibble(expand.grid(
  stringsAsFactors = FALSE,
  Transformation = c("eager", "lazy", "retval", "original"),
  NewMethod = c("wrapper", "direct")))


all_configurations <- inner_join(
  compile_configurations %>% mutate(TMP = 1),
  run_configurations %>% mutate(TMP = 1))
all_configurations <- all_configurations %>% select(-TMP)

gather_benchmark_filenames <- function(languages) {
  return (languages %>%
    map(function(l) {
      return(Sys.glob(str_c("benchmarks/", l, "/js-build/*")))
    }) %>%
    unlist())
}

parse_benchmark_filename <- function(filename) {
  match <- str_match(filename, ".*/([^/]*)/js-build/([^.]*)\\.js$")
  colnames(match) <- c("Filename","Language","Benchmark")
  return (match)
}

benchmark_configurations <- function(languages) {
  benchmarks <- as_tibble(
    parse_benchmark_filename(
      gather_benchmark_filenames(languages)))
  df <- inner_join(
    benchmarks %>% mutate(TMP = 1),
    all_configurations %>% mutate(TMP = 1))
  df <- df %>% select(-TMP)
  return (df)
}

# Adds a column to the benchmark table with the command to compile the
# benchmark to JavaScript and to HTML. Several benchmarks may map to the
# same compile command.
with_compile_command <- function(benchmarks) {
  return (benchmarks %>%
    mutate(CompiledName =
               str_c(Benchmark,Language,Transformation,NewMethod, sep="-"),
           CompiledJs =
              str_c(CompiledName,".js"),
           CompiledHtml =
             str_c(CompiledName,".html"),
           CompileJsCommand =
             str_c("./bin/compile -t",Transformation, "-n", NewMethod, Filename, CompiledJs, sep=" "),
           CompileHtmlCommand =
             str_c("./bin/webpack",CompiledJs,CompiledHtml, sep=" ")) %>%
    select(-CompiledName))
}

with_run_command <- function(benchmarks) {
  return (benchmarks %>%
            mutate(
              RunLogFile =
                str_c(
                  str_c(Benchmark,Language,Transformation,NewMethod,Platform,
                        Estimator,str_replace_na(TimePerElapsed),
                        str_replace_na(YieldInterval), sep="-"),
                  ".log"),
              RunCommand =
                str_c("/bin/browser", "--env", Platform,
                      "--estimator", Estimator,
                      str_replace_na(str_c("--time-per-elapsed ", TimePerElapsed),
                                     replacement=""),
                      str_replace_na(str_c("--yield ", YieldInterval),
                                     replacement=""),
                      CompiledHtml,
                      sep=" ")))
}

read_timing <- function(source) {
  df <- read_csv(source) %>%
    select(Platform,Transform, Benchmark, Language, RunningTime,YieldInterval) %>%
    mutate(Source = source)
  return(df)
}

read_code_size <- function(source) {
  df <- read_csv(source) %>%
    select(Transform, Benchmark, Language, NewMethod, TimesBlowup) %>%
    mutate(Source = source)
  return(df)
}

calc_slowdown <- function(timing) {
  baseline <- timing %>%
    filter(Transform == "original") %>%
    mutate(BaseTime = RunningTime) %>%
    select(Platform,Benchmark,Language,Source,BaseTime) %>%
    distinct(Platform, Benchmark, Language, Source, .keep_all = TRUE)

  withoutOriginal <- timing %>% filter(Transform != "original")
  df <- inner_join(baseline, withoutOriginal) %>%
    mutate(Slowdown = RunningTime / BaseTime,
           Label = paste(Language,Benchmark),
           Type = paste(Platform,Transform,YieldInterval,Source)) %>%
    select(Type,Slowdown) %>%
    mutate(TMP = 1) %>%
    group_by(Type) %>%
    arrange(Slowdown) %>%
    mutate(Count = cumsum(TMP)) %>%
    select(Slowdown,Type,Count)
  return(df)
}

code_blow <- function(timing) {
  df <- filter(timing, Transform != "original") %>%
    mutate(Type = paste(Transform,Source,NewMethod)) %>%
    select(Type,TimesBlowup) %>%
    mutate(TMP = 1) %>%
    group_by(Type) %>%
    arrange(TimesBlowup) %>%
    mutate(Count = cumsum(TMP),
           Slowdown = TimesBlowup)

  return(df)
}

# benchmark_table <- benchmark_configurations(c("ocaml", "scala"))
# df <- with_run_command(with_compile_command(benchmark_table))

what_broke <- function(old_csv, new_csv) {
  epsilon <- 5
  old <- read_timing(old_csv) %>%
    mutate(OldRunningTime = RunningTime) %>%
    select(OldRunningTime,Platform,Transform,Benchmark, Language,YieldInterval)
  new <- read_timing(new_csv) %>%
    mutate(NewRunningTime = RunningTime) %>%
    select(NewRunningTime,Platform,Transform,Benchmark, Language,YieldInterval)
  diff <- full_join(old, new) %>%
    filter(is.na(NewRunningTime)) %>%
    select(Platform,Transform,Language,Benchmark)
  return (diff)
}
