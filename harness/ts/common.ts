import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';

export type Platform = 'native' | 'chrome' | 'firefox' | 'MicrosoftEdge' | 'safari';

export interface Benchmark {
  rowId: number,
  lang: string,
  bench: string,
  platform: Platform,
  transform?: 'native' | 'original' | 'lazy' | 'eager' | 'retval',
  newMethod?: 'direct' | 'wrapper',
  esMode?: 'sane' | 'es5',
  estimator?: 'countdown' | 'reservoir',
  timePerElapsed?: string,
  yieldInterval?: string,
  resampleInterval?: string,
  runningTime?: number,
  numYields?: number
}

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

export function parseBenchmarkRow(row: any): Benchmark {
  return {
    rowId: row.rowid,
    lang: row.lang,
    bench: row.bench,
    platform: row.platform,
    transform: unna(row.transform),
    newMethod: unna(row.new_method),
    esMode: unna(row.es_mode),
    estimator: unna(row.estimator),
    timePerElapsed: unna(row.time_per_elapsed),
    yieldInterval: unna(row.yield_interval),
    resampleInterval: unna(row.resample_interval),
    runningTime: unna(row.running_time),
    numYields: unna(row.num_yields)
  };
}

/**
 * Produces all benchmarks that still need to run.
 */
export function unfinishedBenchmarks(db: Database): Benchmark[] {
  return db.prepare(`SELECT rowid,* FROM timing WHERE running_time IS NULL AND ix < 3`)
    .all()
    .map(parseBenchmarkRow);
}

export function benchmarkSourceFilename(benchmark: Benchmark) {
  const { lang, bench } = benchmark;
  return `./benchmarks/${lang}/js-build/${bench}.js`;
}

export function benchmarkCompiledFilename(benchmark: Benchmark) {
  // These are the compile-time settings
  const { lang, bench, platform, transform, newMethod, esMode } = benchmark;
  return `${lang}-${bench}-${transform}-${newMethod}-${esMode}.js`;
}

export function benchmarkRunOpts(benchmark: Benchmark): string[] {
  const { lang, bench, platform, transform, newMethod, esMode, estimator,
    timePerElapsed, yieldInterval, resampleInterval } = benchmark;

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

  return args;
}

export function parseBenchmarkOutput(stdout: string) {
  const output = String(stdout).split('\n');
  const lastLine = output[output.length - 2].split(',');
  const runningTime = Number(lastLine[0]);
  const numYields = Number(lastLine[1]);
  if (runningTime >= 0 && numYields >= 0) {
    return { runningTime, numYields };
  }
  else {
    console.error(`unexpected result from benchmark`);
    console.error(output.join('\n'));
    return undefined;
  }

}