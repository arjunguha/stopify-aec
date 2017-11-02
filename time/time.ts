import * as path from 'path';
import { spawnSync } from 'child_process';

const cmd = process.argv.slice(2);

const before = Date.now();
const proc = spawnSync(cmd.join(' '), { stdio: [ 'none', 'inherit', 'pipe' ],
  shell: '/bin/bash',
  encoding: 'utf8',
});
const after = Date.now();
console.log(after-before);
