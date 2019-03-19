#!/usr/bin/env node
const Chalk = require("chalk");
const DownloadStatsTask = require("./tasks/download_stats_task");

module.exports = {
  init: (input, flags) => {
    const command = input[0];

    switch (command.toLowerCase()) {
      case "ds":
        DownloadStatsTask.init(flags);
        break;

      default:
        console.log(Chalk.red(`Sorry, cant find command: ${command}`));
    }
  }
};
