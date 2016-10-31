#!/usr/bin/env node
const programm = require('commander');
const caniuseYarn = require('../lib');
const pkg = require('../package.json');

programm
  .version(pkg.version)
  .parse(process.argv);

process.exit(caniuseYarn() ? 0 : 1);
