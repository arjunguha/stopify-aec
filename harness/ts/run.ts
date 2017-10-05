import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';

const db = new Database('results.sqlite');

function unna(x: string): string | undefined {
  if (x === 'NA') {
    return undefined;
  }
  return x;
}

function runBenchmarks() {
  const rows = db.prepare(`SELECT rowid,* FROM timing WHERE running_time IS NULL and platform != 'MicrosoftEdge'`).all();
  for (const row of rows) {
    const result = runBenchmark(row.lang, row.bench, row.platform,
      <any>unna(row.transform), <any>unna(row.new_method),
      <any>unna(row.es_mode), <any>unna(row.estimator),
      unna(row.time_per_elapsed), unna(row.yield_interval));
    if (result) {
      const n = db.prepare(`UPDATE timing SET running_time = ?, num_yields = ?
        WHERE rowid = ?`).run(
          result.runningTime, result.numYields, row.rowid).changes;
    }
  }
}

export function runBenchmark(lang: string,
  bench: string,
  platform: 'native' | 'chrome' | 'firefox',
  transform?: 'native' | 'original' | 'lazy' | 'eager' | 'retval',
  newMethod?: 'direct' | 'wrapper',
  esMode?: 'sane' | 'es5',
  estimator?: 'countdown' | 'reservoir',
  timePerElapsed?: string,
  yieldInterval?: string): { runningTime: number, numYields?: number } | undefined {
  if (platform === 'native') {
    if (lang === 'python_pyjs') {
      const filename = path.resolve(__dirname, `../../${lang}/${bench}/main.py`);
      const runningTime = time('python', filename);
      if (runningTime) {
        return { runningTime };
      }
      else {
        return undefined;
      }
    }
    else {
      return undefined;
    }

  }
  else {
    if (bench === 'gcbench' || bench == 'schulze') {
      return;
    }
    const benchmarkFilename = `./benchmarks/${lang}/js-build/${bench}.js`;
    const compiledFilename =
      `./benchmarks/scripts/workdir/${lang}-${bench}-${transform}-${newMethod}-${esMode}.js`;
    if (!fs.existsSync('../../' + compiledFilename)) {
      const args = ['--webpack', '-t', transform!];
      if (transform !== 'original') {
        args.push('--new', newMethod!, '--es', esMode!); 
      }
      args.push(benchmarkFilename, compiledFilename);
      try {
        console.error(`Running ./bin/compile ${args.join(' ')} ...`);
        spawnSync('./bin/compile', args, {
          cwd: path.resolve(__dirname, '../../..')
        });
      }
      catch (exn) {
        console.error(`Exception running ./bin/compile ${args.join(' ')}`);
        return;
      }
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
    if (<any>platform === 'MicrosoftEdge') {
      args.push('--remote', 'http://10.9.0.100:4444/wd/hub',
        '--local-host', '10.9.0.102');
    }
       args.push(compiledFilename);
    try {
      console.error(`Running ./bin/browser ${args.join(' ')}`);
      let proc = spawnSync('./bin/browser', args, {
        stdio: [ 'none', 'inherit', 'pipe' ],
        cwd: path.resolve(__dirname, '../../..')
      });
      const output = String(proc.stdout).split('\n');
      const lastLine = output[output.length - 2].split(',');
      const runningTime = Number(lastLine[0]);
      const numYields = Number(lastLine[1]);
      if (runningTime >= 0 && numYields >= 0) {
        return { runningTime, numYields };
      }
      else {
      console.error(`unexpected result from ./bin/browser ${args.join(' ')}`);
      console.error(output.join('\n'));
        return undefined;
      }
    }
    catch (exn) {
      console.error(`Exception running ./bin/browser ${args.join(' ')}`);
      return;
    }
  }
}

export function time(command: string, ...args: string[]): number | undefined {
  const start = Date.now();
  console.error(`Running ${command} ${args.join(' ')} ...`);
  try {
    spawnSync(command, args);
  }
  catch (exn) {
    console.error(`Error running ${command} ${args.join(' ')}`);
    return undefined;
  }
  const end = Date.now();
  return  (end - start);
}

export function filenameWithoutExt(path: string): string {
  return /([^/]*)\.[^.]*/.exec(path)![1];
}

function na(x: string | number | undefined): string {
  if (x === undefined) {
    return 'NA';
  }
  else if (typeof x === 'number') {
    return String(x);
  }
  else {
    return x;
  }
}

runBenchmarks();
