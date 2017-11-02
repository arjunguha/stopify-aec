"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var cmd = process.argv.slice(2);
var before = Date.now();
console.log("Executing " + cmd.join(' '));
var proc = child_process_1.spawnSync(cmd.join(' '), { stdio: ['none', 'inherit', 'pipe'],
    shell: '/bin/bash',
    encoding: 'utf8'
});
var after = Date.now();
console.log(after - before);
