#!/usr/bin/env node

const spawnSync = require('child_process').spawnSync;
const process = require('process')

const stime = Date.now()
const [command, ...args] = process.argv.slice(2)
spawnSync(command, [...args])
process.stdout.write(String(Date.now() - stime))
