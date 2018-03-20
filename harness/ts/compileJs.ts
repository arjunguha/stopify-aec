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

// Pyret files are already compiled with Stopify. Just copy them.
function compilePyret(lang: string, benchmark: common.Benchmark): void {
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
}

// Skulpt benchmarks are precompiled and wrapped in an HTML harness to drive
// the program in a web browser. Just copy them.
function compileSkulpt(benchmark: common.Benchmark): void {
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

// Kraken Imaging benchmarks `require` data from an external file. Compile and
// webpack these sources.
function compileJSKrakenImaging(benchmark: common.Benchmark): void {
    const benchmarkFilename = common.benchmarkSourceFilename(benchmark);
    const compiledFilename = './benchmarks/tmp/' + common.benchmarkCompiledFilename(benchmark);

    if (fs.existsSync('../../' + compiledFilename)) {
      return;
    }

    spawnSync('webpack', [benchmarkFilename, compiledFilename], {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    })

    const args = ['-t', benchmark.transform];
    args.push(compiledFilename, compiledFilename);
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

    return;
}

function compileJSOctane(benchmark: common.Benchmark): void {
  const benchmarkFilename = common.benchmarkSourceFilename(benchmark);
  const compiledFilename = './benchmarks/tmp/' + common.benchmarkCompiledFilename(benchmark);

  if (fs.existsSync('../../' + compiledFilename)) {
    return;
  }

  const args = ['-t', benchmark.transform];

  const baseSource = path.resolve(__dirname,
    '../../javascript/js-build/octane/base.js');
  const baseCompiled = path.resolve(__dirname, '../../tmp/base.js');
  if (!fs.existsSync(baseCompiled)) {
    spawnSync('./bin/compile', [
      ...args,
      baseSource,
      baseCompiled,
    ], {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    })
  }

  args.push(benchmarkFilename, compiledFilename);
  if (benchmark.transform !== 'original') {
    args.push(...[
      '--new', benchmark.newMethod!,
      '--es', 'es5',
      '--js-args', 'full',
      '--hofs', 'fill',
      '--getters',
      '--eval',
    ]);
  }

  if (benchmark.transform === 'original') {
    spawnSync('webpack', [
      benchmarkFilename,
      compiledFilename,
      '--config',
      'benchmarks/javascript/webpack.config.js',
    ], {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    })

    console.error(`Running ./bin/compile ${args.join(' ')} ...`);
    spawnSync('./bin/compile', [
      '-t', 'original',
      compiledFilename,
      compiledFilename
    ], {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    });
  } else {
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

    spawnSync('webpack', [
      compiledFilename,
      compiledFilename,
      '--config',
      'benchmarks/javascript/webpack.config.js',
    ], {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../../..')
    })
  }

  return;
}

export function compileBenchmark(benchmark: common.Benchmark) {
  // These are the compile-time settings
  const { lang, platform, transform, newMethod, esMode, jsArgs,
          getters, EVAL } = benchmark;

  if (platform === 'native') {
    // no compile step for natives
    return;
  }

  switch (lang) {
    case 'pyret':
    case 'pyret_deepstacks':
      compilePyret(lang, benchmark);
      break;
    case 'skulpt':
      return compileSkulpt(benchmark);
    case 'javascript':
      if (benchmark.bench.startsWith('kraken-imaging-') &&
        transform === 'original') {
        return compileJSKrakenImaging(benchmark);
      } else if (benchmark.bench.startsWith('octane/')) {
        return compileJSOctane(benchmark);
      }
  }

  const benchmarkFilename = common.benchmarkSourceFilename(benchmark);
  const compiledFilename = './benchmarks/tmp/' + common.benchmarkCompiledFilename(benchmark);

  if (fs.existsSync('../../' + compiledFilename)) {
    return;
  }

  const args = ['-t', transform];

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
