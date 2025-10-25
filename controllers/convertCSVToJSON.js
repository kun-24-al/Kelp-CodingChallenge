const fs = require("fs");
const parseCSV = require("../services/parseCSV");
const transformUser = require("../services/transformObjects");
const insertUser = require("../services/insertUsers");
const printAgeDistribution = require("../services/getAgeDistribution");
require("dotenv").config();

module.exports = async function (req, res, next) {
  try {
    const csv = fs.readFileSync(process.env.CSV_FILE_PATH, "utf-8");
    const parsed = parseCSV(csv);
    for (const record of parsed) {
      const user = transformUser(record);
      await insertUser(user);
    }
    await printAgeDistribution();
    res.status(200).json({ data: "CSV uploaded and processed." });
  } catch (err) {
    console.error(err);
    res.status(503).json({ data: `Error while parsing csv ${err.message}` });
  }
};
