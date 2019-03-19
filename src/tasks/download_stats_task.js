#!/usr/bin/env node
"use strict";
const Scraper = require("../utils/scraper.js");

// Main code //
module.exports = {
  init: flags => {
    // TODO: handle multiple flags
    // TODO: Check if package exists in npm
    Scraper.getDownloadStats(flags);
  }
};
