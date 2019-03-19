const got = require("got");
const cheerio = require("cheerio");
const log = console.log;

const stats = async username => {
  const baseUrl = "https://api.npmjs.org/downloads/point/";
  const lastWeek = "last-week/";
  const packages = "npm,express";

  const finalUrl = `${baseUrl}${lastWeek}${packages}`;

  try {
    const response = await got(finalUrl);
    return response.body;
  } catch (error) {
    console.log(error.response.body);

    throw error;
  }
};

// module.exports = stats;
module.exports = {
  sayHello: () => {
    return "Hello World!";
  },
  getDownloadStats: stats
};
module.exports.default = stats;
