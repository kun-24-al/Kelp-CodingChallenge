const express = require("express");
const convertCSVToJSON = require("./controllers/convertCSVToJSON");
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/upload-csv", convertCSVToJSON);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
