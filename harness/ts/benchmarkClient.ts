import * as common from './common';

const benchmarkTimeout = 1200; //seconds
const checkInterval = 5; // seconds

const skip = document.getElementById('skip')!;
const renderResults = document.getElementById('render')!;
const resultsContainer = document.getElementById('results-container')!;
const configInfo = document.getElementById('configuration-info')!;

function log(message: string) {
  console.error(message)
}

var headers = new Headers();
headers.append("Content-Type", "application/json");

export function benchmarkUrl(args: string[]) {
  return encodeURIComponent(JSON.stringify(args));
}

function getName(b: common.Benchmark | common.VarianceBench) {
  return `${b.lang}-${b.bench}-${b.transform}-${b.esMode}-${b.newMethod}-${b.estimator}-${b.yieldInterval}`;
}

function capitalFirst(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

function generateConfigInfo(b: common.Benchmark | common.VarianceBench): string {
  const { lang, bench } = b;
  let str = `<b>Language</b>: ${lang}<br />
  <b>Name</b>: ${bench}<br />`;

  const ignoreOpts = ['lang', 'bench', 'type', 'platform', 'rowId']

  for (const flag in b) {
    if (ignoreOpts.includes(flag) || (<any>b)[flag] === undefined) {
      continue;
    }
    str += `<b>${capitalFirst(flag)}</b>: ${capitalFirst((<any>b)[flag])}<br />`
  }

  return str;
}

function runBenchmark(b: common.Benchmark | common.VarianceBench): Promise<boolean> {
  let url: string;
  if (b.lang === 'skulpt') {
    url = `/benchmarks/skulpt-${b.bench}-original-undefined-undefined-undefined-undefined-undefined.html`;
  }
  else if (b.lang === 'pyret' || b.lang === 'pyret_deepstacks') {
    url = '/pyret-benchmark.html#' +
      benchmarkUrl([
        ...common.benchmarkRunOpts(b),
        '/benchmarks/' + common.benchmarkCompiledFilename(b)]);
  }
  else {
    url = '/benchmark.html#' +
      benchmarkUrl([
        ...common.benchmarkRunOpts(b),
        '/benchmarks/' + common.benchmarkCompiledFilename(b)]);
  }

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  const bStr = getName(b)

  configInfo.innerHTML = generateConfigInfo(b)

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

        fetch(new Request('/done', {
          method: 'post',
          headers: headers,
          body: JSON.stringify({
            output: data,
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
  const progressContainer = document.getElementById('progress-container') as HTMLDivElement;
  const n = benchmarks.length;

  let completed = 0;

  function helper(i: number): Promise<boolean> {
    progress.style.width = `${Math.floor(i/n * 100)}%`;
    progressText.innerText = `Completed ${completed} of ${n}`;

    if (i === n) {
      renderResults.style.display = 'block';
      skip.style.display = 'none';
      progressContainer.style.display = progressText.style.display = 'none';
      document.getElementById('configuration')!.style.display = 'none';
      return Promise.resolve(true);
    }
    return runBenchmark(benchmarks[i])
      .then(() => {
        completed++;
      })
      .catch(() => {
        log(`${getName(benchmarks[i])} failed`)
      })
      .then(() => helper(i + 1));
  }
  return helper(0);
}

function resultsListener() {
  renderResults.innerText = 'Rendering';
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
    })
    .then((results: any) => {
      console.log('adding figures');
      (<any>document.getElementById('figure2a'))!.src += results.figure2a;
      (<any>document.getElementById('figure2b'))!.src += results.figure2b;
      (<any>document.getElementById('figure2c'))!.src += results.figure2c;
      (<any>document.getElementById('figure8'))!.src += results.figure8;
      (<any>document.getElementById('figure10'))!.src += results.figure10;
      (<any>document.getElementById('figure12'))!.src += results.figure12;
      renderResults.style.display = 'none';
      resultsContainer.style.display = 'block';
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
