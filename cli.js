#!/usr/bin/env node
'use strict';

const meow = require('meow');
const router = require('./src/router');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

const cli = meow(`
Usage

   $ yo-node-cli-skeleton <command> <params>

   $ yo-node-cli-skeleton sample <param>             # Uses the <PARAM>
   $ yo-node-cli-skeleton other <param>              # Other the <PARAM>
   $ yo-node-cli-skeleton another <param>            # Another the <PARAM>
   
 Examples

   $ yo-node-cli-skeleton sample TEST                # Uses the TEST
   $ yo-node-cli-skeleton sample YOLO                # Uses the YOLO
   $ yo-node-cli-skeleton other YOLO                 # Uses the YOLO
   $ yo-node-cli-skeleton another YOLO               # Uses the YOLO
`,
  {
    alias: {
      v: 'version'
    },
    boolean: ['version']
  }
);

if (cli.input.length > 0) {
	router.init(cli.input, cli.flags);
} else {
	cli.showHelp(2);
}