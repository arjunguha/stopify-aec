import * as assert from 'assert';
import * as path from 'path'
import * as fs from 'fs';
import { spawnSync } from 'child_process';
import * as Database from 'better-sqlite3';
import * as common from './common';

const db = new Database('results.sqlite');

function compileBenchmarks() {
  common.unfinishedBenchmarks(db).forEach(compileBenchmark);
}

export function compileBenchmark(benchmark: common.Benchmark | common.VarianceBench) {
  if (benchmark.type === 'variance') {
    return;
  }

  // These are the compile-time settings
  const { lang, platform, transform, newMethod, esMode, jsArgs,
          getters, EVAL } = benchmark;

  // Pyret files are already compiled with Stopify. Just copy them.
  if (lang === 'pyret' || lang == 'pyret_deepstacks') {
    const benchmarkFilename = common.pyretSourceFilename(lang, benchmark);
    const compiledFilename =
      `./benchmarks/tmp/${common.benchmarkCompiledFilename(benchmark)}`

    if (fs.existsSync('../../' + compiledFilename)) {
      return;
    }

    spawnSync('cp', [benchmarkFilename, compiledFilename], {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    })
    return
  } else if (lang === 'skulpt') {
    const benchmarkFilename = `./benchmarks/skulpt/js-build/${benchmark.bench}.html`;
    const compiledFilename =
      `./benchmarks/tmp/skulpt-${benchmark.bench}-original-undefined-undefined-undefined-undefined-undefined.html`

    if (fs.existsSync('../../' + compiledFilename)) {
      return;
    }

    spawnSync('cp', [benchmarkFilename, compiledFilename], {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    })
    return;
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

  const args = ['--webpack', '-t', transform];

  if (transform !== 'original') {
    args.push('--new', newMethod!);
    args.push('--es', esMode!);
    args.push('--js-args', jsArgs!);

    if (lang === 'c++' || lang === 'clojurescript' || lang === 'javascript') {
      args.push('--hofs', 'fill');
    }

    if (getters) { args.push('--getters') }
    if (EVAL) { args.push('--eval') }
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
