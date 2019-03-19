#!/usr/bin/env node
"use strict";

const meow = require("meow");
const router = require("./src/router");
const updateNotifier = require("update-notifier");
const pkg = require("./package.json");

updateNotifier({ pkg }).notify();

const cli = meow(
  `
Usage

   $ npm-downloads-graph-cli <command> <flag>

 Examples

   $ npm-downloads-graph-cli ds                         # Get the download statistics
   $ npm-downloads-graph-cli ds --lw                    # last week download statistics
`,
  {
    alias: {
      v: "version"
    },
    boolean: ["version"]
  }
);

if (cli.input.length > 0) {
  router.init(cli.input, cli.flags);
} else {
  cli.showHelp(2);
}
