#!/usr/bin/env node
"use strict";

const Chalk = require("chalk");
const log = console.log;
const fs = require("fs");
const Scraper = require("../utils/scraper.js");

// Main code //
module.exports = {
  init: flags => {
    // TODO: handle multiple flags
    // TODO: Check if package exists in npm
    Scraper.getDownloadStats(flags);
  }
};
