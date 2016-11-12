#!/usr/bin/env node
const program = require('commander');
const caniuseYarn = require('../lib');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .parse(process.argv);

process.exit(caniuseYarn() ? 0 : 1);
