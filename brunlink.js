#!/usr/bin/env node

const { execSync } = require('child_process');


const braids = require(process.cwd() + '/.braids.json');

for (const name in braids) {
  execSync(`rm ${name} -r`);
  execSync(`git checkout ${name}`);
}
