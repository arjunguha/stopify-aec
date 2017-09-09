library(tidyverse)
library(stringr)

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
