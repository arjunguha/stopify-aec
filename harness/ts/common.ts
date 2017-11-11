import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';

export type Platform = 'native' | 'chrome' | 'firefox' | 'MicrosoftEdge' | 'safari' | 'ChromeBook';
export type BenchmarkOutput =
  {
    type: 'timing',
    runningTime: number,
    numYields: number
  } | {
    type: 'variance',
    variance: string,
    runningTime: number,
    numYields: number
  };

interface Common {
  rowId: number,
  lang: string,
  bench: string,
  platform: Platform,
  transform?: 'native' | 'original' | 'lazy' | 'eager' | 'retval',
  newMethod?: 'direct' | 'wrapper',
  esMode?: 'sane' | 'es5',
  jsArgs?: 'simple' | 'faithful',
  estimator?: 'countdown' | 'reservoir',
  timePerElapsed?: string,
  yieldInterval?: string,
  resampleInterval?: string,
};

export interface Benchmark extends Common {
  type: 'timing',
  runningTime?: number,
  numYields?: number,
};

export interface VarianceBench extends Common {
  type: 'variance',
  variance?: string,
};

function unna<T extends string | number>(x: T): T | undefined {
  if (typeof x === 'string') {
    if (x === 'NA') {
      return undefined;
    }
    return x;
  }
  else {
    if (x === undefined || x === null) {
      return undefined;
    }
    return x;
  }
}

export function mayNull(x: any) {
  if (x === undefined) {
    return `NA`;
  }
  return `${x}`;
}

export function initVariance(db: Database,
  lang: string,
  bench: string,
  platform: string,
  transform?: string,
  newMethod?: 'direct' | 'wrapper',
  esMode?: string,
  jsArgs?: string,
  estimator?: string,
  timePerElapsed?: number,
  yieldInterval?: number,
  resampleInterval?: number) {
  const r = db.prepare(`INSERT OR IGNORE INTO variance (lang, bench, platform, transform,
    new_method, es_mode, js_args, estimator, time_per_elapsed, yield_interval, resample_interval) VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(lang, bench, platform, mayNull(transform),
      mayNull(newMethod), mayNull(esMode), mayNull(jsArgs),
      mayNull(estimator), mayNull(timePerElapsed),
      mayNull(yieldInterval), mayNull(resampleInterval));
  if (r.changes > 0) {
    console.error(`Creating variance configuration ${lang},${bench},${platform},${transform},${newMethod},${esMode},${jsArgs},${estimator},${timePerElapsed},${yieldInterval},${resampleInterval}`);
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
    estimator: unna(row.estimator),
    timePerElapsed: unna(row.time_per_elapsed),
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
    lang: row.lang,
    bench: row.bench,
    platform: row.platform,
    transform: unna(row.transform),
    newMethod: unna(row.new_method),
    esMode: unna(row.es_mode),
    jsArgs: unna(row.js_args),
    estimator: unna(row.estimator),
    timePerElapsed: unna(row.time_per_elapsed),
    yieldInterval: unna(row.yield_interval),
    resampleInterval: unna(row.resample_interval),
    variance: unna(row.variance),
  };
}

function getTimingBenchmarks(db: Database, platform: Platform|undefined,
  queryParam: string): Benchmark[] {
    const filter = decodeURIComponent(queryParam);
    return db.prepare(`SELECT rowid,* FROM timing WHERE ${platform ? 'platform="' + platform + '" AND' : '' }
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
export function unfinishedBenchmarks(db: Database, platform?: Platform, filter?: string): (Benchmark|VarianceBench)[] {
  return [
    ...getTimingBenchmarks(db, platform, filter || ''),
    ...getVarianceBenchmarks(db, platform, filter || ''),
  ];
}

export function benchmarkSourceFilename(benchmark: Common) {
  const { lang, bench } = benchmark;
  return `./benchmarks/${lang}/js-build/${bench}.js`;
}

export function pyretSourceFilename(benchmark: Benchmark) {
  const { lang, bench, transform } = benchmark

  let suffix;

  if (transform === 'native') {
    suffix = 'jarr'
  }
  else if (transform === 'original') {
    suffix = 'v.jarr'
  }
  else {
    suffix = 'vs.jarr'
  }

  return `./benchmarks/pyret/js-build/${bench}.${suffix}`
}

export function benchmarkCompiledFilename(benchmark: Common) {
  // These are the compile-time settings
  const { lang, bench, transform, newMethod, esMode, jsArgs } = benchmark;
  return `${lang}-${bench}-${transform}-${newMethod}-${esMode}-${jsArgs}.js`;
}

export function benchmarkRunOpts(benchmark: Benchmark | VarianceBench): string[] {
  const { lang, bench, platform, transform, newMethod, esMode, estimator,
    timePerElapsed, yieldInterval, resampleInterval, jsArgs } = benchmark;

  if (lang === 'pyret') {
    return  ['--env', platform];
  }

  const args = [ '--env', platform, '-t', transform!];
  if (estimator) {
    args.push('--estimator', estimator!);
  }
  if (timePerElapsed) {
    args.push ('--time-per-elapsed', String(timePerElapsed));
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

function parseRunningTimes(output: string[]): any {
  const lastLine = output[output.length - 1].split(',');
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
  if (output.length < 2) {
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
