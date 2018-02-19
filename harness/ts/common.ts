import * as Database from 'better-sqlite3';

export type Platform = 'native' | 'chrome' | 'firefox' | 'MicrosoftEdge' | 'safari' | 'ChromeBook';

export type BenchmarkOutput =
  { type: 'timing', runningTime: number, numYields: number } |
  { type: 'variance', variance: string, runningTime: number, numYields: number };

export interface Config {
  transform: 'original' | 'lazy' | 'eager' | 'retval' | 'lazyDeep' | 'native',
  newMethod?: 'direct' | 'wrapper',
  esMode?: 'sane' | 'es5',
  jsArgs?: 'simple' | 'faithful' | 'full',
  estimator?: 'countdown' | 'reservoir' | 'velocity' | 'exact',
  getters?: 'getters',
  EVAL?: 'eval', // TS complains when `eval` is used as a field name.
  yieldInterval?: number,
  resampleInterval?: number,
}

interface Common extends Config {
  rowId: number,
  lang: string,
  bench: string,
  platform: Platform,
};

export interface Benchmark extends Common {
  type: 'timing',
  runningTime?: number,
  numYields?: number,
};

export interface VarianceBench extends Common {
  type: 'variance',
  ix: number,
  variance?: string,
};

function unna<T extends string | number>(x: T): T | undefined {
  if (x === undefined || x === null || x === 'NA') {
    return undefined;
  }
  else {
    return x
  }
}

export function mayNull(x: any) {
  if (x === undefined) {
    return `NA`;
  }
  return `${x}`;
}

export function initVariance(db: Database,
  ix: number,
  lang: string,
  bench: string,
  platform: string,
  config: Config) {

  const { transform, newMethod, esMode, jsArgs, getters, EVAL, estimator,
          yieldInterval, resampleInterval } = config

  const r = db.prepare(
  `INSERT OR IGNORE INTO variance (ix, lang, bench, platform, transform,
    new_method, es_mode, js_args, getters, eval, estimator, yield_interval, resample_interval) VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(ix, lang, bench, platform, mayNull(transform),
      mayNull(newMethod), mayNull(esMode), mayNull(jsArgs), mayNull(getters),
      mayNull(EVAL), mayNull(estimator), mayNull(yieldInterval),
      mayNull(resampleInterval));

  if (r.changes > 0) {
    console.error(`Creating variance configuration ${JSON.stringify(config)}`);
  }

}

export function parseBenchmarkRow(row: any): Benchmark | VarianceBench {
  if (row.type === 'timing') {
    return parseBenchmarkTiming(row);
  } else {
    return parseBenchmarkVariance(row);
  }
}

export function parseBenchmarkTiming(row: any): Benchmark {
  return {
    type: 'timing',
    rowId: row.rowid,
    lang: row.lang,
    bench: row.bench,
    platform: row.platform,
    transform: unna(row.transform),
    newMethod: unna(row.new_method),
    esMode: unna(row.es_mode),
    jsArgs: unna(row.js_args),
    getters: unna(row.getters),
    EVAL: unna(row.eval),
    estimator: unna(row.estimator),
    yieldInterval: unna(row.yield_interval),
    resampleInterval: unna(row.resample_interval),
    runningTime: unna(row.running_time),
    numYields: unna(row.num_yields),
  };
}

export function parseBenchmarkVariance(row: any): VarianceBench {
  return {
    type: 'variance',
    rowId: row.rowid,
    ix: row.ix,
    lang: row.lang,
    bench: row.bench,
    platform: row.platform,
    transform: unna(row.transform),
    newMethod: unna(row.new_method),
    esMode: unna(row.es_mode),
    jsArgs: unna(row.js_args),
    getters: unna(row.getters),
    EVAL: unna(row.eval),
    estimator: unna(row.estimator),
    yieldInterval: unna(row.yield_interval),
    resampleInterval: unna(row.resample_interval),
    variance: unna(row.variance),
  };
}

function getTimingBenchmarks(db: Database, platform: Platform|undefined,
  queryParam: string): Benchmark[] {
    const filter = decodeURIComponent(queryParam);
    return db.prepare(
    `SELECT rowid,* FROM timing WHERE ${platform ? 'platform="' + platform + '" AND' : '' }
                     running_time IS NULL ` + (filter === '' ? '' : `AND ${filter}` + ';'))
      .all()
      .map(parseBenchmarkTiming);
  }

function getVarianceBenchmarks(db: Database, platform: Platform|undefined,
  queryParam: string): VarianceBench[] {
    const filter = decodeURIComponent(queryParam);
    return db.prepare(`SELECT rowid,* FROM variance WHERE ${platform ? 'platform="' + platform + '" AND' : '' }
                     variance IS NULL ` + (filter === '' ? '' : `AND ${filter}` + ';'))
      .all()
      .map(parseBenchmarkVariance);
  }

/**
 * Produces all benchmarks that still need to run.
 */
export function unfinishedBenchmarks(db: Database, platform?: Platform, filter?: string): (Benchmark | VarianceBench)[] {
  return [
    ...getTimingBenchmarks(db, platform, filter || ''),
    ...getVarianceBenchmarks(db, platform, filter || ''),
  ];
}

export function benchmarkSourceFilename(benchmark: Common) {
  const { lang, bench } = benchmark;
  return `./benchmarks/${lang}/js-build/${bench}.js`;
}

export function pyretSourceFilename(lang: string, benchmark: Benchmark) {
  const { bench, transform } = benchmark

  let suffix;

  if (transform === 'original') {
    suffix = 'v.jarr'
  }
  else if (transform === 'retval') {
    suffix = 'vs.jarr.retval'
  }
  else {
    suffix = 'vs.jarr'
  }

  return `./benchmarks/${lang}/js-build/${bench}.${suffix}`
}

export function benchmarkCompiledFilename(benchmark: Common) {
  // These are the compile-time settings
  const { lang, bench, transform, newMethod, esMode, jsArgs,
    getters, EVAL } = benchmark;

  return `${lang}-${bench}-${transform}-${newMethod}-${esMode}-${jsArgs}-${getters}-${EVAL}.js`;
}

export function benchmarkRunOpts(benchmark: Benchmark | VarianceBench): string[] {
  const { lang, platform, transform, estimator, yieldInterval,
          resampleInterval } = benchmark;

  // Pyret sets up its own options.
  if (lang === 'pyret') {
    return  ['--env', platform];
  }

  const args = [ '--env', platform, '-t', transform!];
  if (transform === 'lazyDeep') {
    args.push('-d', '500')
  }
  if (estimator) {
    args.push('--estimator', estimator!);
  }
  if (yieldInterval) {
    args.push('-y', String(yieldInterval));
  }
  if (resampleInterval) {
    args.push('-r', String(resampleInterval));
  }
  if (benchmark.type === 'variance') {
    args.push('--variance');
  }

  return args;
}

export function dropWhile<T>(f: (elt: T) => boolean, arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i]) === false) {
      return arr.slice(i);
    }
  }
  return [];
}

function takeWhile<T>(f: (elt: T) => boolean, arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i]) === false) {
      return arr.slice(0, i);
    }
  }
  return arr.slice(0);
}

/**
 * Expects the somewhere in the output, there are two lines:
 *
 * BEGIN STOPIFY BENCHMARK RESULTS
 * num,num/NA,num/NA,num/NA
 *
 * If no such line is found, return undefined.
 *
 * Otherwise, return the second line split on ,.
 */
function parsePyretRunningTimes(output: string[]): string[] | undefined {
  const ix = output.findIndex(x => x === "BEGIN STOPIFY BENCHMARK RESULTS");

  if(ix === -1) {
    return undefined;
  }

  const lastLine = output[ix + 1];

  return lastLine ? lastLine.split(',') : undefined;
}

function parseRunningTimes(output: string[]): any {

  let lastLine: string[];

  if (output.pop() !== 'OK.') {
    // Try parsing the output as Pyret's output.
    const out = parsePyretRunningTimes(output);
    if (!out) {
      console.error(`unexpected result from benchmark`);
      console.error(output.join('\n'));
      return undefined;
    }
    else {
      lastLine = out;
    }
  }
  else {
    lastLine = output[output.length - 1].split(',');
  }

  const runningTime = Number(lastLine[0]);

  // Pyret outputs NA for numYields in all cases
  const numYields = lastLine[1] === 'NA' ? 0 : Number(lastLine[1])
  if (runningTime >= 0 && numYields >= 0) {
    return { runningTime, numYields };
  }
  else {
    console.error(`unexpected result from benchmark`);
    console.error(output.join('\n'));
    return undefined;
  }
}

export function parseBenchmarkOutput(stdout: string): BenchmarkOutput | undefined {
  let output = String(stdout).split('\n')
  if (output.length < 3) {
    console.error(`unexpected result from benchmark`);
    console.error(output.join('\n'));
    return undefined;
  }
  let variance =
    takeWhile(line => line !== "END VARIANCE",
      dropWhile(line => line !== "BEGIN VARIANCE", output));
  let res = parseRunningTimes(output);
  if (res === undefined) {
    return undefined;
  }
  if (variance.length > 0) {
    variance = variance.slice(1); // Drop the BEGIN VARIANCE
    res.type = 'variance', res.variance = variance.join('\n');
  } else {
    res.type = 'timing';
  }
  return res;
}
