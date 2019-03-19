const got = require("got");
const Chalk = require("chalk");

const getUrlFromFlag = flags => {
  switch (true) {
    case flags.ld:
      return "last-day";
    case flags.lw:
      return "last-week";
    case flags.lm:
      return "last-month";
    default:
      return "last-week";
  }
};

const printDownloadData = data => {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(key + " -> " + data[key].downloads);
    }
  }
};

const stats = async flags => {
  const baseUrl = "https://api.npmjs.org/downloads/point/";
  const range = `${getUrlFromFlag(flags)}/`;
  const packages = "npm,express";

  const finalUrl = `${baseUrl}${range}${packages}`;

  try {
    const response = await got(finalUrl);
    console.log(response.body);
    printDownloadData(JSON.parse(response.body));
  } catch (error) {
    console.log(error.response.body);
    throw error;
  }
};

module.exports = {
  getDownloadStats: stats
};
