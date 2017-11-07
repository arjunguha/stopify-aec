import * as assert from 'assert';
import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import  * as csvStringify  from 'csv-stringify';
import * as Database from 'better-sqlite3';
import * as glob from 'glob';
import * as common from './common';

const db = new Database('results.sqlite');

function compileBenchmarks() {
  common.unfinishedBenchmarks(db).forEach(compileBenchmark);
}

export function compileBenchmark(benchmark: common.Benchmark) {
  // These are the compile-time settings
  const { lang, bench, platform, transform, newMethod, esMode, jsArgs } = benchmark;

  if (lang === 'pyret') {
    const benchmarkFilename = common.pyretSourceFilename(benchmark);
    const compiledFilename =
      `./benchmarks/tmp/${common.benchmarkCompiledFilename(benchmark)}`

    spawnSync('cp', [benchmarkFilename, compiledFilename], {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    })
    return
  }

  if (platform === 'native') {
    // no compile step for natives
    return;
  }

  const benchmarkFilename = common.benchmarkSourceFilename(benchmark);
  const compiledFilename = './benchmarks/tmp/' + common.benchmarkCompiledFilename(benchmark);

  if (fs.existsSync('../../' + compiledFilename)) {
    return;
  }

  const args = ['--webpack', '-t', transform!];
  if (transform! !== 'original') {
    args.push('--new', newMethod!);
    args.push('--es', esMode!);
    args.push('--js-args', jsArgs!);
  }
  args.push(benchmarkFilename, compiledFilename);
  try {
    console.error(`Running ./bin/compile ${args.join(' ')} ...`);
    spawnSync('./bin/compile', args, {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    });
  }
  catch (exn) {
    console.error(exn);
    assert.fail(`Exception running ./bin/compile ${args.join(' ')}`);
  }
}

compileBenchmarks();
