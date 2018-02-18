import * as common from './common';

const benchmarkTimeout = 1200; //seconds
const checkInterval = 5; // seconds

const label = <HTMLDivElement>document.getElementById('label');
const skip = document.getElementById('skip')!;
const renderResults = document.getElementById('render')!;

function log(message: string) {
  const div = <HTMLDivElement>document.getElementById('log');
  const msg = document.createElement('div');
  msg.appendChild(document.createTextNode(message));
  div.insertBefore(msg, div.firstChild);
}

var headers = new Headers();
headers.append("Content-Type", "application/json");

export function benchmarkUrl(args: string[]) {
  return encodeURIComponent(JSON.stringify(args));
}

function getName(b: common.Benchmark | common.VarianceBench) {
  return `${b.lang}-${b.bench}-${b.transform}-${b.esMode}-${b.newMethod}-${b.estimator}-${b.yieldInterval}`;
}

function runBenchmark(b: common.Benchmark | common.VarianceBench): Promise<boolean> {
  const url =
  (b.lang === 'pyret_deepstacks' || b.lang === 'deepstacks' ?
  '/deep-benchmark.html#' : '/benchmark.html#') +
   benchmarkUrl([
     ...common.benchmarkRunOpts(b),
     '/benchmarks/' + common.benchmarkCompiledFilename(b)]);

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  const bStr = getName(b)
  label.innerText = bStr;

  return new Promise<boolean>((resolve, reject) => {

    let elapsedTime = 0;

    function cleanup() {
      skip.removeEventListener('click', skipListener);
      window.clearInterval(timer);
      iframe.remove();
    }

    function checkDone() {
      if (iframe.contentDocument.title === 'done') {
        const data = (<HTMLTextAreaElement>iframe.contentDocument.getElementById('data')).value;

        const output = common.dropWhile(
          line => line !== "BEGIN STOPIFY BENCHMARK RESULTS",
          String(data)
            .split('\n')
            .filter(line => line.length> 0)).join("\n")

        fetch(new Request('/done', {
          method: 'post',
          headers: headers,
          body: JSON.stringify({
            output: output,
            rowId: b.rowId,
            lang: b.lang,
            bench: b.bench,
            transform: b.transform,
            newMethod: b.newMethod,
            esMode: b.esMode,
            jsArgs: b.jsArgs,
            getters: b.getters,
            eval: b.EVAL,
            estimator: b.estimator,
            yieldInterval: b.yieldInterval,
            resampleInterval: b.resampleInterval,
          })
        })).then(resp => {
          cleanup();
          if (resp.status === 200) {
            resolve(true);
          }
          else {
            reject('could not save result');
          }
        });
      }

      elapsedTime += checkInterval;
      if (elapsedTime > benchmarkTimeout) {
        log(`${bStr} was taking too long`);
        cleanup();
        reject(`timeout`);
      }
    }

    function skipListener() {
      log(`Skipped ${bStr}`);
      cleanup();
      reject('skipped');
    }

    skip.addEventListener('click', skipListener);

    const timer = window.setInterval(checkDone, checkInterval * 1000);

    iframe.onerror = () => {
      log(`Error loading ${bStr}`);
      cleanup();
      reject('error');
    }

  });
}

function runAllBenchmarks(benchmarks: (common.Benchmark|common.VarianceBench)[]): Promise<boolean> {
  const progress = <HTMLDivElement>document.getElementById('progress');
  const progressText = <HTMLDivElement>document.getElementById('progressText');
  const n = benchmarks.length;

  let completed = 0;
  let failed = 0;

  function helper(i: number): Promise<boolean> {
    progress.style.width = `${Math.floor(i/n * 100)}%`;
    progressText.innerText = `Completed ${completed} of ${n} benchmarks (${failed} failures)`;
    if (i === n) {
      renderResults.style.display = 'block';
      return Promise.resolve(true);
    }
    return runBenchmark(benchmarks[i])
      .then(() => {
        completed++;
      })
      .catch(() => {
        failed++;
        log(`${getName(benchmarks[i])} failed`)
      })
      .then(() => helper(i + 1));
  }
  return helper(0);
}

function resultsListener() {
  fetch(new Request('/results', {
    method: 'get',
  }))
    .then(resp => {
      if (resp.status === 200) {
        return resp.json();
      }
      else {
        throw new Error(`GET /results status: ${resp.status}`);
      }
    });
}

renderResults.addEventListener('click', resultsListener);

fetch(new Request('/list', {
  method: 'post',
  headers: headers,
  body: JSON.stringify({
    urlParams: window.location.search.substring(1),
  }),
}))
  .then(resp => {
    if (resp.status === 200) {
      return resp.json();
    }
    else {
      throw new Error(`POST /list get status ${resp.status}`);
    }
  })
  .then(runAllBenchmarks);

window.onerror = function(message, src, line, col, err) {
  log(`Error: ${message} ${err}`);

}
