const got = require("got");
const Chalk = require("chalk");
const moment = require("moment");

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
      console.log(
        `${Chalk.blue(key)} ${moment(data[key].start)
          .startOf("day")
          .fromNow()} --> ${moment(data[key].end)
          .startOf("day")
          .fromNow()}`
      );
      console.log(Chalk.green(data[key].downloads));
    }
  }
};

const stats = async flags => {
  const baseUrl = "https://api.npmjs.org/downloads/point/";
  const range = `${getUrlFromFlag(flags)}/`;
  const packages = "react-hooks-giphy,react-hooks-barcode,react-csv-viewer";

  const finalUrl = `${baseUrl}${range}${packages}`;

  try {
    const response = await got(finalUrl);
    printDownloadData(JSON.parse(response.body));
  } catch (error) {
    console.log(error.response.body);
    throw error;
  }
};

module.exports = {
  getDownloadStats: stats
};
