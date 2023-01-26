const express = require("express");
const router = require("./routes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}...`);
});
