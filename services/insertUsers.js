const pool = require("../helpers/postgresConnection");

module.exports = async function insertUser(user) {
  const query = `
    INSERT INTO users ("name", age, address, additional_info)
    VALUES ($1, $2, $3, $4)
  `;
  await pool.query(query, [
    user.name,
    user.age,
    JSON.stringify(user.address),
    JSON.stringify(user.additional_info),
  ]);
};
