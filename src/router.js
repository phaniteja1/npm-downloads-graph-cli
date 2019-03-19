#!/usr/bin/env node
"use strict";

const Chalk = require("chalk");
const Utils = require("./utils/utils");
const log = console.log;

const SampleTask = require("./tasks/sample_task");

const DownloadStatsTask = require("./tasks/download_stats_task");

// Main code //
const self = (module.exports = {
  init: (input, flags) => {
    const command = input[0];

    switch (command.toLowerCase()) {
      case "ds":
        DownloadStatsTask.init(flags);
        break;

      default:
        log(`Sorry, cant find ${command}`);
    }
  }
});
