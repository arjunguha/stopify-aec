import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import * as Database from 'better-sqlite3';
import * as common from './common';
const db = new Database('results.sqlite');

function runBenchmarks(query: string | undefined) {
  const filter = query === undefined || query === '' ? '' : `AND ${query}`;
  const benchmarks = common.unfinishedBenchmarks(db, undefined, filter);
  for (const benchmark of benchmarks) {
    const result = runBenchmark(benchmark);
    if (result) {
      if (result.type === 'variance') {
        db.prepare(`UPDATE variance SET variance = ?, running_time = ?, num_yields = ?
                  WHERE rowid = ?`).run(result.variance, result.runningTime,
                    result.numYields, benchmark.rowId).changes;
      } else {
        db.prepare(`UPDATE timing SET running_time = ?, num_yields = ?
                  WHERE rowid = ?`).run(
                    result.runningTime, result.numYields, benchmark.rowId).changes;
      }
    }
  }
}

function runNative(lang: string, bench: string): { type: 'timing', runningTime: number, numYields: number } | undefined {
    if (lang === 'python_pyjs') {
      const filename = path.resolve(__dirname, `../../${lang}/${bench}/main.py`);
      const runningTime = time('python', filename);
      if (runningTime) {
        return { type: 'timing', runningTime, numYields: 0 };
      }
      else {
        return undefined;
      }
    }
    else {
      const filename = path.resolve(__dirname, `../../${lang}/native-build/${bench}`);
      const runningTime = time(filename);
      if (runningTime) {
        return { type: 'timing',runningTime, numYields: 0 };
      }
      else {
        return undefined;
      }
    }
}

export function runBenchmark(benchmark: common.Benchmark|common.VarianceBench): common.BenchmarkOutput | undefined {
  const { lang, bench, platform } = benchmark;

  if (platform === 'native') {
    return runNative(lang, bench);
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

    const args = common.benchmarkRunOpts(benchmark);

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
      return common.parseBenchmarkOutput(String(proc.stdout));
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

runBenchmarks(process.argv.slice(2).join(' '));
