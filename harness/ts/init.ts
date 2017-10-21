import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';

const edge = 'MicrosoftEdge';


const db = new Database('results.sqlite');

db.exec(`CREATE TABLE IF NOT EXISTS timing
  (ix INTEGER NOT NULL,
   lang TEXT NOT NULL,
   bench TEXT NOT NULL,
   platform TEXT NOT NULL,
   transform TEXT NOT NULL,
   new_method TEXT NOT NULL,
   es_mode TEXT NOT NULL,
   estimator TEXT NOT NULL,
   time_per_elapsed TEXT NOT NULL,
   yield_interval TEXT NOT NULL,
   resample_interval TEXT NOT NULL,
   running_time INTEGER,
   num_yields INTEGER);`);

db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS timing_index ON timing
  (ix,lang,bench,platform,transform,new_method,es_mode,estimator,
   time_per_elapsed,yield_interval,resample_interval);`);

const langs = [ 'python_pyjs', 'ocaml', 'clojurescript', 'dart_dart2js', 'scala' ];

function mayNull(x: any) {
  if (x === undefined) { 
    return `NA`;
  }
  return `${x}`;
}
function initTiming(i: number,
  lang: string,
  bench: string,
  platform: string,
  transform?: string,
  newMethod?: 'direct' | 'wrapper',
  esMode?: string,
  estimator?: string,
  timePerElapsed?: number,
  yieldInterval?: number,
  resampleInterval?: number) {
  const r = db.prepare(`INSERT OR IGNORE INTO timing (ix, lang, bench, platform, transform,
    new_method, es_mode, estimator, time_per_elapsed, yield_interval, resample_interval) VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(i, lang, bench, platform, mayNull(transform), mayNull(newMethod),
    mayNull(esMode), mayNull(estimator),
      mayNull(timePerElapsed), mayNull(yieldInterval), mayNull(resampleInterval));
  if (r.changes > 0) {
    console.error(`Creating configuration ${i},${lang},${bench},${platform},${transform},${newMethod},${esMode},${estimator},${timePerElapsed},${yieldInterval},${resampleInterval}`);
  }
}

function pythonBenchmark(name: string) {
  // Sadly, these two just crash with --es=es5
  if (name === 'gcbench' || name === 'schulze') {
    return;
  }
  for (let i = 0; i < 10; i++) {
    initTiming(i, 'python_pyjs', name, 'native');
    initTiming(i, 'python_pyjs', name, 'chrome', 'original');
    initTiming(i, 'python_pyjs', name, 'firefox', 'original');
    initTiming(i, 'python_pyjs', name, 'MicrosoftEdge', 'original');

    // Compare ES5 sane vs. insane mode using Chrome only. The other browsers
    // are just way too slow.
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'direct',  'es5',  'countdown');
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper',  'es5',  'countdown');
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'direct',  'sane', 'countdown', undefined,   1000000);

    // Compare all Chrome, Firefox, and Edge for new method.
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, edge,     'lazy', 'direct',  'sane', 'countdown', undefined,   1000000);
    initTiming(i, 'python_pyjs', name, edge,     'lazy', 'wrapper', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'direct', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'wrapper', 'sane', 'countdown', undefined, 1000000);

    initTiming(i, 'python_pyjs', name, 'firefox', 'retval', 'direct', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'chrome', 'retval', 'wrapper', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'reservoir', undefined,  100);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'direct', 'sane', 'reservoir', undefined,  100);
    initTiming(i, 'python_pyjs', name, edge, 'lazy', 'direct', 'sane', 'reservoir', undefined,  100);
  }
}

function timeEstimatorComparisonBenchmarks() {
  for (let i = 0; i < 10; i++) {
    initTiming(i, 'scala', 'Meteor', 'chrome', 'lazy', 'wrapper', 'sane', 'exact', undefined, 100);
    initTiming(i, 'scala', 'Meteor', 'chrome', 'lazy', 'wrapper', 'sane', 'countdown', undefined, 1000000);
    initTiming(i, 'scala', 'Meteor', 'chrome', 'lazy', 'wrapper', 'sane', 'velocity', undefined, 100, 250);
  }
}

const browsers = [ 'chrome', 'firefox', 'MicrosoftEdge', 'safari' ];

function benchmarksFor(lang: string, bench: string) {
  if (lang === 'python_pyjs') {
    pythonBenchmark(bench);
  }

  for (let i = 0; i < 10; i++) {
    if (lang === 'scala') {
      for (const resampleInterval of [ 100, 250, 500, 750, 1000 ]) {
        initTiming(i, lang, bench, 'chrome', 'lazy', 'direct', 'sane', 'velocity',
          undefined, 100, resampleInterval);
      }
    }

    for (const browser of browsers) {
      initTiming(i, lang, bench, browser, 'original');
    }
    initTiming(i, lang, bench, 'safari', 'lazy', 'direct', 'sane', 'reservoir', undefined, 100);
    for (const transform of [ 'lazy', 'retval' ]) {
      initTiming(i, lang, bench, 'chrome',  transform, 'wrapper', 'sane', 'reservoir', undefined,  100);
      initTiming(i, lang, bench, 'firefox', transform, 'direct', 'sane', 'reservoir', undefined,  100);
      initTiming(i, lang, bench, edge,      transform, 'direct', 'sane', 'reservoir', undefined,  100);
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
      console.error(`Could not parse filename ${path}`);
      continue;
    }
    const lang = m[1];
    const bench = m[2];
    benchmarksFor(lang, bench);
  }
}

createTimingTable();
timeEstimatorComparisonBenchmarks();
