import * as express from 'express';
import * as Database from 'better-sqlite3';
import * as bodyParser from 'body-parser';
const detectBrowser = require('detect-browser'); // NOTE(arjun): no @types
import * as path from 'path';
import * as common from './common';
import { Platform, Benchmark } from './common';
import { parseRuntimeOpts } from '../../../built/src/cli-parse';


const platforms: Platform[] = [ 'safari', 'firefox', 'MicrosoftEdge', 'chrome' ];

type BenchmarkMap = Map<Platform, { url: String, rowId: number }[]>;

function benchmarksByPlatform(db: Database) {
  const all = common.unfinishedBenchmarks(db);

  function forPlatform(platform: Platform) {
    return all.filter(b => b.platform === platform)
      .map(b => {
        const p = '/benchmarks/' + common.benchmarkCompiledFilename(b);
        const args = common.benchmarkRunOpts(b);
        args.push(p);
        const opts = parseRuntimeOpts(args);
        return {
          rowId: b.rowId,
          url: `/benchmark.html#${encodeURIComponent(JSON.stringify(opts))}`
        }
      });
  }

  const benchmarkListMap: BenchmarkMap = new Map();
  for (const platform of platforms) {
    benchmarkListMap.set(platform, forPlatform(platform));
  }
  return benchmarkListMap;
}

function getPlatform(ua: string): Platform | undefined {
  const browser = detectBrowser.parseUserAgent(ua);
  switch (browser.name) {
    case 'edge':
      return 'MicrosoftEdge';
    case 'chrome':
    case 'safari':
    case 'firefox':
      return browser.name;
    default:
      return undefined;
  }
}

function serve(db: Database, port: number) {

  const benchmarkMap = benchmarksByPlatform(db);
  const app = express();

  // Serve stopify.bundle.js and benchmark.html, which go in the IFRAME
  app.use(express.static(path.join(__dirname, '../../../dist')));

  // Serve the benchmark running page
  app.use(express.static(path.join(__dirname, '../www')));

  // Serve the benchmark files
  app.use('/benchmarks', express.static(path.join(__dirname, '../../tmp')));

  app.get('/list', (req, res) => {
    const ua = req.headers['user-agent'];
    const platform = getPlatform(<string>ua);
    if (typeof platform === 'undefined') {
      console.error(`Cannot serve ${ua}`);
      res.sendStatus(404);
      return;
    }
    const alist = benchmarkMap.get(platform)!;
    res.send(JSON.stringify(alist.map(x => x.url)));
  });

  app.post('/done', bodyParser.json(), (req, res) => {
    const ua = req.headers['user-agent'];
    const platform = getPlatform(<string>ua)!;
    const { output, url } = req.body;
    const bench = benchmarkMap.get(platform)!.find(b => b.url === url);
    if (typeof bench === 'undefined') {
      console.error(`Bad benchmark url from browser`);
      res.sendStatus(404);
      return;
    }
    const result = common.parseBenchmarkOutput(output);
    if (typeof result === 'undefined') {
      console.error(`Could not parse benchmark output`);
      res.sendStatus(404);
      return;
    }
    db.prepare(`UPDATE timing SET running_time = ?, num_yields = ?
                WHERE rowid = ?`)
      .run(result.runningTime, result.numYields, bench.rowId);
    res.sendStatus(200);
  });

  app.listen(port);
}

serve(new Database('results.sqlite'), 8080);