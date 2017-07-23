#!/usr/bin/env node

const spawnSync = require('child_process').spawnSync;

const [_, command, ...args] = process.argv.slice(1);

const s = process.hrtime();
const runner = spawnSync(command, args, { timeout: 300 * 1000, stdio: [ 'ignore', 'ignore', 'inherit' ] });
if(runner.status !== 0) {
  throw 'Did not work';
}
const e = process.hrtime(s);

const time = e[0]*1e3 + e[1]*1e-6
process.stdout.write(time.toString())
