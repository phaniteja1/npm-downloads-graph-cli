#!/usr/bin/env node
"use strict";

const Chalk = require("chalk");
const log = console.log;
const fs = require("fs");
const Scraper = require("../utils/scraper.js");

// Main code //
const self = (module.exports = {
  init: async input => {
    if (input.length == 0) {
      log(Chalk.red(`You need to specify a param`));
      return;
    }

    var something = await Scraper.getDownloadStats();

    log(`Package name with: ${input} ${something}`);
  }
});
