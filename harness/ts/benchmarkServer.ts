import * as express from 'express';
import * as Database from 'better-sqlite3';
import * as bodyParser from 'body-parser';
const detectBrowser = require('detect-browser'); // NOTE(arjun): no @types
import * as path from 'path';
import * as common from './common';
import { Platform, Benchmark } from './common';
import { parseRuntimeOpts } from '../../../built/src/cli-parse';

function getPlatform(ua: string): Platform | undefined {
  if (ua.includes('CrOS')) {
    return 'ChromeBook';
  }
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

function getBenchmarks(db: Database, platform : common.Platform,
  queryParam: string): Benchmark[] {
    const filter = decodeURIComponent(queryParam);
    return db.prepare(`SELECT rowid,* FROM timing WHERE platform = ? AND
                     running_time IS NULL AND ix < 3 ` + (filter === '' ? '' : `AND ${filter}`))
      .all(platform)
      .map(common.parseBenchmarkRow);
  }

function serve(db: Database, port: number) {

  const app = express();

  // Serve stopify.bundle.js and benchmark.html, which go in the IFRAME
  app.use(express.static(path.join(__dirname, '../../../dist')));

  // Serve the benchmark running page
  app.use(express.static(path.join(__dirname, '../www')));

  // Serve the benchmark files
  app.use('/benchmarks', express.static(path.join(__dirname, '../../tmp')));

  app.post('/list', bodyParser.json(), (req, res) => {
    const { urlParams } = req.body;
    const ua = req.headers['user-agent'];
    const platform = getPlatform(<string>ua);
    if (typeof platform === 'undefined') {
      console.error(`Cannot serve ${ua}`);
      res.sendStatus(404);
      return;
    }
    res.send(JSON.stringify(getBenchmarks(db, platform, urlParams)));
  });

  app.post('/done', bodyParser.json(), (req, res) => {
    const ua = req.headers['user-agent'];
    const platform = getPlatform(<string>ua)!;
    const { output, rowId } = req.body;
    const result = common.parseBenchmarkOutput(output);
    if (typeof result === 'undefined') {
      console.error(`Could not parse benchmark output`);
      res.sendStatus(404);
      return;
    }
    db.prepare(`UPDATE timing SET running_time = ?, num_yields = ?
                WHERE rowid = ?`)
      .run(result.runningTime, result.numYields, rowId);
    res.sendStatus(200);
  });

  app.listen(port);
}

serve(new Database('results.sqlite'), 8080);
