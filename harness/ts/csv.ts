import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';

const db = new Database('results.sqlite', {
  readonly: true, 
  fileMustExist: true 
});

const outfile = 'results.csv';

const fd = fs.openSync('results.csv', 'wx');


const rows = db.prepare(`SELECT * FROM timing WHERE
  running_time IS NOT NULL`).all();

function na(x: any): string {
  if (x === null) {
    return 'NA';
  }
  else {
    return String(x);
  }
}

fs.appendFileSync(fd,
  'Language,Benchmark,Platform,Transform,NewMethod,EsMode,JsArgs,Estimator,');
fs.appendFileSync(fd, 'TimePerElapsed,YieldInterval,ResampleInterval,RunningTime,NumYields\n');
for (const row of rows) {
  fs.appendFileSync(fd, `${row.lang},${row.bench},${row.platform},`);
  fs.appendFileSync(fd, `${na(row.transform)},${na(row.new_method)},`);
  fs.appendFileSync(fd, `${na(row.es_mode)},${na(row.js_args)},${na(row.estimator)},`);
  fs.appendFileSync(fd, `${na(row.time_per_elapsed)},`);
  fs.appendFileSync(fd, `${na(row.yield_interval)},`);
  fs.appendFileSync(fd, `${na(row.resample_interval)},`);
  fs.appendFileSync(fd, `${na(row.running_time)},`);
  fs.appendFileSync(fd, `${na(row.num_yields)}\n`);
}
fs.closeSync(fd);
