import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';
import { mayNull, initVariance } from './common';

const edge = 'MicrosoftEdge';

const db = new Database('results.sqlite');

const ITERATIONS = 3

db.exec(`CREATE TABLE IF NOT EXISTS timing
  (ix INTEGER NOT NULL,
   lang TEXT NOT NULL,
   bench TEXT NOT NULL,
   platform TEXT NOT NULL,
   transform TEXT NOT NULL,
   new_method TEXT NOT NULL,
   es_mode TEXT NOT NULL,
   js_args TEXT NOT NULL,
   estimator TEXT NOT NULL,
   time_per_elapsed TEXT NOT NULL,
   yield_interval TEXT NOT NULL,
   resample_interval TEXT NOT NULL,
   running_time INTEGER,
   num_yields INTEGER);`);

db.exec(`CREATE TABLE IF NOT EXISTS variance
  (ix INTEGER NOT NULL,
   lang TEXT NOT NULL,
   bench TEXT NOT NULL,
   platform TEXT NOT NULL,
   transform TEXT NOT NULL,
   new_method TEXT NOT NULL,
   es_mode TEXT NOT NULL,
   js_args TEXT NOT NULL,
   estimator TEXT NOT NULL,
   time_per_elapsed TEXT NOT NULL,
   yield_interval TEXT NOT NULL,
   resample_interval TEXT NOT NULL,
   variance TEXT,
   running_time INTEGER,
   num_yields INTEGER);`);

db.exec(`CREATE TABLE IF NOT EXISTS failures
  (lang TEXT NOT NULL,
   bench TEXT NOT NULL,
   platform TEXT NOT NULL,
   transform TEXT NOT NULL,
   new_method TEXT NOT NULL,
   es_mode TEXT NOT NULL,
   js_args TEXT NOT NULL,
   estimator TEXT NOT NULL,
   time_per_elapsed TEXT NOT NULL,
   yield_interval TEXT NOT NULL,
   resample_interval TEXT NOT NULL);`);

db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS timing_index ON timing
  (ix,lang,bench,platform,transform,new_method,es_mode,js_args,estimator,
   time_per_elapsed,yield_interval,resample_interval);`);
db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS variance_index ON variance
  (ix,lang,bench,platform,transform,new_method,es_mode,js_args,estimator,
   time_per_elapsed,yield_interval,resample_interval);`);
db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS failure_index ON failures
  (lang,bench,platform,transform,new_method,es_mode,js_args,estimator,
   time_per_elapsed,yield_interval,resample_interval);`);

// 3 more needed: Java, Pyret, JavaScript
const langs = [ 'python_pyjs', 'ocaml', 'clojurescript', 'dart_dart2js',
  'scala', 'c++', 'scheme', 'java', 'javascript', 'deepstacks' ];

const browsers = [ 'chrome', 'firefox', 'MicrosoftEdge', 'safari', 'ChromeBook' ];

function initTiming(i: number,
  lang: string,
  bench: string,
  platform: string,
  transform?: 'original' | 'lazy' | 'eager' | 'retval' | 'lazyDeep',
  newMethod?: 'direct' | 'wrapper',
  esMode?: 'sane' | 'es5',
  jsArgs?: 'simple' | 'faithful',
  estimator?: 'exact' | 'countdown' | 'reservoir' | 'velocity',
  timePerElapsed?: number,
  yieldInterval?: number,
  resampleInterval?: number) {
  const r = db.prepare(`INSERT OR IGNORE INTO timing (ix, lang, bench, platform, transform,
    new_method, es_mode, js_args, estimator, time_per_elapsed, yield_interval, resample_interval) VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(i, lang, bench, platform, mayNull(transform), mayNull(newMethod),
      mayNull(esMode), mayNull(jsArgs), mayNull(estimator),
      mayNull(timePerElapsed), mayNull(yieldInterval), mayNull(resampleInterval));
  if (r.changes > 0) {
    console.error(`Creating configuration ${i},${lang},${bench},${platform},${transform},${newMethod},${esMode},${jsArgs},${estimator},${timePerElapsed},${yieldInterval},${resampleInterval}`);
  }
}

function pythonBenchmark(name: string) {
  // Sadly, these two just crash with --es=es5
  if (name === 'gcbench' || name === 'schulze') {
    return;
  }
  for (let i = 0; i < ITERATIONS; i++) {
    // Initialize python variance entries
    initVariance(db, i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'simple', 'countdown', undefined,  1000000);
    initVariance(db, i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'simple', 'exact', undefined,  100);
    initVariance(db, i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'simple', 'velocity', undefined,  100, 250);

    initTiming(i, 'python_pyjs', name, 'chrome', 'original');
    initTiming(i, 'python_pyjs', name, 'firefox', 'original');
    initTiming(i, 'python_pyjs', name, 'MicrosoftEdge', 'original');

    // Compare ES5 sane vs. insane mode using Chrome only. The other browsers
    // are just way too slow.
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'direct',  'es5', 'simple', 'countdown');
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper',  'es5', 'simple', 'countdown');
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'direct',  'sane', 'simple', 'countdown', undefined,   1000000);

    // Compare all Chrome, Firefox, and Edge for new method.
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'simple', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, edge,     'lazy', 'direct',  'sane', 'simple', 'countdown', undefined,   1000000);
    initTiming(i, 'python_pyjs', name, edge,     'lazy', 'wrapper', 'sane', 'simple', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'direct', 'sane', 'simple', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'wrapper', 'sane', 'simple', 'countdown', undefined, 1000000);


    if (["b", "binary_trees","nbody", "richards"].includes(name)) {
      initTiming(i, 'python_pyjs', name, 'safari', 'lazy', 'direct', 'sane', 'simple', 'countdown', undefined,  1000000);
      initTiming(i, 'python_pyjs', name, 'safari', 'lazy', 'wrapper', 'sane', 'simple', 'countdown', undefined, 1000000);
    }

    initTiming(i, 'python_pyjs', name, 'firefox', 'retval', 'direct', 'sane', 'simple', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'chrome', 'retval', 'wrapper', 'sane', 'simple', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'simple', 'reservoir', undefined,  100);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'direct', 'sane', 'simple', 'reservoir', undefined,  100);
    initTiming(i, 'python_pyjs', name, edge, 'lazy', 'direct', 'sane', 'simple', 'reservoir', undefined,  100);
  }
}

function microbenchmarks(i: number, bench: string): void {
  const args: ('simple' | 'faithful')[] = ['simple', 'faithful']
  const mode: ('sane' | 'es5')[] = ['sane', 'es5']

  switch (bench) {
    case 'arguments':
      for (const jsArgs of args) {
        initTiming(i, 'microbenches', bench, 'ChromeBook', 'lazy', 'wrapper', 'sane', jsArgs, 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'safari', 'lazy', 'wrapper', 'sane', jsArgs, 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'chrome', 'lazy', 'wrapper', 'sane', jsArgs, 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'firefox', 'lazy', 'wrapper', 'sane', jsArgs, 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, edge, 'lazy', 'wrapper', 'sane', jsArgs, 'reservoir', undefined, 100);
      }
      break;
    case 'arithmetic':
      for (const esMode of mode) {
        initTiming(i, 'microbenches', bench, 'ChromeBook', 'lazy', 'wrapper', esMode, 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'safari', 'lazy', 'wrapper', esMode, 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'chrome', 'lazy', 'wrapper', esMode, 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'firefox', 'lazy', 'wrapper', esMode, 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, edge, 'lazy', 'wrapper', esMode, 'simple', 'reservoir', undefined, 100);
      }
      break;
    case 'constructor':
      for (const handleNew of <any[]>['wrapper', 'direct']) {
        initTiming(i, 'microbenches', bench, 'ChromeBook', 'lazy', handleNew, 'sane', 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'safari', 'lazy', handleNew, 'sane', 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'chrome', 'lazy', handleNew, 'sane', 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'firefox', 'lazy', handleNew, 'sane', 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, edge, 'lazy', handleNew, 'sane', 'simple', 'reservoir', undefined, 100);
      }
      break;
    case 'loop':
      for (const t of <any[]>['lazy', 'retval']) {
        initTiming(i, 'microbenches', bench, 'ChromeBook', t, 'wrapper', 'sane', 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'safari', t, 'wrapper', 'sane', 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'chrome', t, 'wrapper', 'sane', 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, 'firefox', t, 'wrapper', 'sane', 'simple', 'reservoir', undefined, 100);
        initTiming(i, 'microbenches', bench, edge, t, 'wrapper', 'sane', 'simple', 'reservoir', undefined, 100);
      }
      break;
    default:
      break;
  }
}

function timeEstimatorComparisonBenchmarks() {
  for (let i = 0; i < ITERATIONS; i++) {
    initTiming(i, 'scala', 'Meteor', 'chrome', 'lazy', 'wrapper', 'sane', 'simple', 'exact', undefined, 100);
    initTiming(i, 'scala', 'Meteor', 'chrome', 'lazy', 'wrapper', 'sane', 'simple', 'countdown', undefined, 1000000);
    initTiming(i, 'scala', 'Meteor', 'chrome', 'lazy', 'wrapper', 'sane', 'simple', 'velocity', undefined, 100, 250);
  }
}

function javascriptBenchmark(name: string) {
  for (let i = 0; i < ITERATIONS; i++) {
    for (const browser of browsers) {
      initTiming(i, 'javascript', name, browser, 'original');
    }
    initTiming(i, 'javascript', name, 'ChromeBook', 'lazy', 'wrapper', 'es5', 'faithful', 'velocity', undefined, 100);
    initTiming(i, 'javascript', name, 'safari',  'lazy', 'direct', 'es5', 'faithful', 'velocity', undefined, 100);
    initTiming(i, 'javascript', name, 'chrome',  'lazy', 'wrapper', 'es5', 'faithful', 'velocity', undefined,  100);
    initTiming(i, 'javascript', name, 'firefox', 'lazy', 'direct', 'es5', 'faithful', 'velocity', undefined,  100);
    initTiming(i, 'javascript', name, edge, 'retval', 'direct', 'es5', 'faithful', 'velocity', undefined,  100);
  }
}

function javaBenchmark(bench: string) {
  for (let i = 0; i < ITERATIONS; i++) {
    for (const browser of browsers) {
      initTiming(i, 'javascript', name, browser, 'original');
    }
      initTiming(i, 'java', bench, 'ChromeBook', 'lazy', 'wrapper', 'sane', 'faithful', 'velocity', undefined, 100);
      initTiming(i, 'java', bench, 'safari',  'lazy', 'direct', 'sane', 'faithful', 'velocity', undefined, 100);
      initTiming(i, 'java', bench, 'chrome',  'lazy', 'wrapper', 'sane', 'faithful', 'velocity', undefined,  100);
      initTiming(i, 'java', bench, 'firefox', 'lazy', 'direct', 'sane', 'faithful', 'velocity', undefined,  100);
      initTiming(i, 'java', bench, edge, 'retval', 'direct', 'sane', 'faithful', 'velocity', undefined,  100);
  }
}

function pyretBenchmark(name: string) {
  // Benchmark harness for pyret.
  if (name === 'benchmark-base') {
    return;
  }

  for (let i = 0; i < ITERATIONS; i++) {
    for (const b of browsers) {
      initTiming(i, 'pyret', name, b, 'original');
      // edge uses retval
      if (b === 'MicrosoftEdge') {
        initTiming(i, 'pyret', name, b, 'retval', 'wrapper', 'sane', 'simple', 'reservoir', undefined, 100);
      }
      else {
        initTiming(i, 'pyret', name, b, 'lazy', 'wrapper', 'sane', 'simple', 'reservoir', undefined, 100);
      }
    }
  }
}

function deepstackBenchmark(lang: string, name: string) {
  for (let i = 0; i < ITERATIONS; i++) {
    for (const b of browsers) {
      initTiming(i, lang, name, b, 'lazyDeep', 'wrapper', 'sane', 'simple', 'reservoir', undefined, 100)
    }
  }
}

function benchmarksFor(lang: string, bench: string) {
  // These are the benchmarks we use in Section 2.
  switch(lang) {
    case 'javascript': {
      javascriptBenchmark(bench);
      break;
    }
    case 'java': {
      javaBenchmark(bench)
      break;
    }
    default: {
      for (let i = 0; i < ITERATIONS; i++) {
        for (const browser of browsers) {
          initTiming(i, lang, bench, browser, 'original');
        }

        initTiming(i, lang, bench, 'ChromeBook', 'lazy', 'wrapper', 'sane', 'simple', 'velocity', undefined, 100);
        initTiming(i, lang, bench, 'safari',  'lazy', 'direct', 'sane', 'simple', 'velocity', undefined, 100);
        initTiming(i, lang, bench, 'chrome',  'lazy', 'wrapper', 'sane', 'simple', 'velocity', undefined,  100);
        initTiming(i, lang, bench, 'firefox', 'lazy', 'direct', 'sane', 'simple', 'velocity', undefined,  100);
        initTiming(i, lang, bench, edge, 'retval', 'direct', 'sane', 'simple', 'velocity', undefined,  100);
      }
      break;
    }
  }
}

function createTimingTable() {

  const benchmarkFiles = langs
    .map(l => glob.sync(path.resolve(__dirname, `../../${l}/js-build/*.js`)))
    .reduce((arr1, arr2) => arr1.concat(arr2));

  for (const path of benchmarkFiles) {
    const m = /^.*\/([^/]*)\/js-build\/([^.]*)\.js$/.exec(path);
    if (m === null) {
      console.error(`could not parse filename ${path}`);
      continue;
    }
    const lang = m[1];
    const bench = m[2];
    benchmarksFor(lang, bench);
  }

  // Pyret benchmarks
  const pyretBench = glob.sync(path.resolve(__dirname, '../../pyret/*.arr'))
  for (const path of pyretBench) {
    const m = /^.*\/([^/]*)\/([^.]*)\.arr/.exec(path);
    if (m === null) {
      console.error(`could not parse filename ${path}`);
      continue;
    }
    const bench = m[2];
    pyretBenchmark(bench);
  }

  // Pyret deepstacks
  const pyretdeepBench =
    glob.sync(path.resolve(__dirname, '../../pyret_deepstacks/*.arr'))

  for (const path of pyretdeepBench) {
    const m = /^.*\/([^/]*)\/([^.]*)\.arr/.exec(path);
    if (m === null) {
      console.error(`could not parse filename ${path}`);
      continue;
    }
    const lang = 'pyret_deepstacks'
    const bench = m[2];
    deepstackBenchmark(lang, bench);
  }

}

createTimingTable();
// Disable time estimator scala benchmark
// timeEstimatorComparisonBenchmarks();

// Disable python comparison benchmarks
// pythonBenchmark(bench);
