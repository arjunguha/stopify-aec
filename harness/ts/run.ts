import * as assert from 'assert';
import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';
import * as common from './common';
const db = new Database('results.sqlite');

function runBenchmarks() {
  const benchmarks = common.unfinishedBenchmarks(db);
  for (const benchmark of benchmarks) {
    const result = runBenchmark(benchmark);
    if (result) {
      db.prepare(`UPDATE timing SET running_time = ?, num_yields = ?
                  WHERE rowid = ?`).run(
          result.runningTime, result.numYields, benchmark.rowId).changes;
    }
  }
}

export function runBenchmark(benchmark: common.Benchmark):
  { runningTime: number, numYields?: number } | undefined {
  const { lang, bench, platform, transform, newMethod, esMode, jsArgs, estimator,
          timePerElapsed, yieldInterval, resampleInterval } = benchmark;

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

    const compiledFilename = common.benchmarkCompiledFilename(benchmark);
    if (!fs.existsSync('../../' + compiledFilename)) {
      console.error(`File not found ${compiledFilename}`);
      return undefined;
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

    // TODO(arjun): These should not be hardcoded
    if (platform === 'MicrosoftEdge') {
      args.push('--remote', 'http://10.9.0.100:4444/wd/hub',
        '--local-host', '10.9.0.102');
    }
    if (platform === 'safari') {
      args.push('--remote', 'http://10.9.0.2:4444/wd/hub',
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

function time(command: string, ...args: string[]): number | undefined {
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

runBenchmarks();
