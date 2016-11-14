#!/usr/bin/env node
const programm = require('commander');
const updateNotifier = require('update-notifier');
const caniuseYarn = require('../lib');
const pkg = require('../package.json');

// notify on new version
updateNotifier({ pkg }).notify({ defer: false });

programm
  .version(pkg.version)
  .parse(process.argv);

process.stdout.write(caniuseYarn().toString());
