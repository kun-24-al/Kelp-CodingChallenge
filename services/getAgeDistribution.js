const pool = require("../helpers/postgresConnection");

module.exports = async function printAgeDistribution() {
  const res = await pool.query("SELECT age FROM users");
  const counts = { "<20": 0, "20-40": 0, "40-60": 0, ">60": 0 };

  res.rows.forEach(({ age }) => {
    if (age < 20) counts["<20"]++;
    else if (age <= 40) counts["20-40"]++;
    else if (age <= 60) counts["40-60"]++;
    else counts[">60"]++;
  });

  const total = res.rows.length;
  for (const group in counts) {
    console.log(`${group}: ${((counts[group] / total) * 100).toFixed(2)}%`);
  }
};
