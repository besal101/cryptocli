#!/usr/bin/env node
const program = require('commander');
const pkg = require('./../package.json');
program
  .version(pkg.version)
  .command('key', 'Manange API KEY -- https://nomics.com')
  .command('check', 'Check Coin Price Info')
  .parse(process.argv);
