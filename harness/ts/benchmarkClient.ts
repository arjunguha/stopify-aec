import * as common from './common';
import { parseRuntimeOpts } from '../../../built/src/cli-parse';

const benchmarkTimeout = 600; //seconds
const checkInterval = 5; // seconds

const label = <HTMLDivElement>document.getElementById('label');
const skip = document.getElementById('skip')!;

function log(message: string) {
  const div = <HTMLDivElement>document.getElementById('log');
  const msg = document.createElement('div');
  msg.appendChild(document.createTextNode(message));
  div.insertBefore(msg, div.firstChild);
}

var headers = new Headers();
headers.append("Content-Type", "application/json");

export function benchmarkUrl(args: string[]) {
  const opts = parseRuntimeOpts(args);
  return encodeURIComponent(JSON.stringify(opts));
}

function runBenchmark(b: common.Benchmark): Promise<boolean> {
  const url = '/benchmark.html#' +
   benchmarkUrl([
     ...common.benchmarkRunOpts(b),
     '/benchmarks/' + common.benchmarkCompiledFilename(b)]);

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  const bStr = `${b.lang}-${b.bench}-${b.transform}-${b.esMode}-${b.newMethod}-${b.estimator}-${b.yieldInterval}`;
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
        fetch(new Request('/done', {
          method: 'post',
          headers: headers,
          body: JSON.stringify({
            output: data,
            rowId: b.rowId
          })
        })).then(resp => {
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
        console.log(`Benchmark was taking too long`);
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
  });
}

function runAllBenchmarks(benchmarks: common.Benchmark[]): Promise<boolean> {
  const progress = <HTMLDivElement>document.getElementById('progress');
  const progressText = <HTMLDivElement>document.getElementById('progressText');
  const n = benchmarks.length;

  let completed = 0;
  let failed = 0;

  function helper(i: number): Promise<boolean> {
    progress.style.width = `${Math.floor(i/n * 100)}%`;
    progressText.innerText = `Completed ${completed} of ${n} benchmarks (${failed} failures)`;
    if (i === n) {
      return Promise.resolve(true);
    } 
    return runBenchmark(benchmarks[i])
      .then(() => {
        completed++;
      })
      .catch(() => {
        failed++;
      })
      .then(() => helper(i + 1));
  }
  return helper(0);
}

fetch(new Request('/list'))
  .then(resp => {
    if (resp.status === 200) {
      return resp.json();
    }
    else {
      throw new Error(`GET /list get status ${resp.status}`);
    }
  })
  .then(runAllBenchmarks);

window.onerror = function(message, src, line, col, err) {
  log(`Error: ${message} ${err}`);

}