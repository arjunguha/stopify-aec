import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';

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
   running_time INTEGER,
   num_yields INTEGER);`);

const langs = [ 'python_pyjs' ];

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
  yieldInterval?: number) {
  const exists = db.prepare(`SELECT * FROM timing WHERE ix = ? AND lang = ? AND
    bench = ? AND platform = ? AND transform = ? AND new_method = ? AND es_mode = ? AND estimator = ? AND
    time_per_elapsed = ? AND yield_interval = ?`).all(
      i, lang, bench, platform, mayNull(transform), mayNull(newMethod),
      mayNull(esMode), mayNull(estimator),
      mayNull(timePerElapsed), mayNull(yieldInterval));
  if (exists.length > 0) {
    return;
  }
  console.error(`Creating configuration ${i},${lang},${bench},${platform},${transform},${newMethod},${esMode}, ${estimator}, ${timePerElapsed}, ${yieldInterval}`);
  const r = db.prepare(`INSERT INTO timing (ix, lang, bench, platform, transform,
    new_method, es_mode, estimator, time_per_elapsed, yield_interval) VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(i, lang, bench, platform, mayNull(transform), mayNull(newMethod),
    mayNull(esMode), mayNull(estimator),
      mayNull(timePerElapsed), mayNull(yieldInterval));
}

function pythonBenchmark(name: string) {
  for (let i = 0; i < 10; i++) {
    initTiming(i, 'python_pyjs', name, 'native');
    initTiming(i, 'python_pyjs', name, 'chrome', 'original');
    initTiming(i, 'python_pyjs', name, 'firefox', 'original');
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'direct', 'es5', 'countdown');
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'direct', 'sane', 'countdown', undefined,   1000000);
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'direct', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'wrapper', 'sane', 'countdown', undefined, 1000000);
    initTiming(i, 'python_pyjs', name, 'firefox', 'retval', 'direct', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'chrome', 'retval', 'wrapper', 'sane', 'countdown', undefined,  1000000);
    initTiming(i, 'python_pyjs', name, 'chrome', 'lazy', 'wrapper', 'sane', 'reservoir', undefined,  100);
    initTiming(i, 'python_pyjs', name, 'firefox', 'lazy', 'direct', 'sane', 'reservoir', undefined,  100);
  }
}

function benchmarksFor(lang: string, bench: string) {
  if (lang === 'python_pyjs') {
    pythonBenchmark(bench);
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
