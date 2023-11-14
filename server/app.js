const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const transactions = require("./routes/transaction");
const categories = require("./routes/category");
const chart = require("./routes/chart");
const db = require("./db");

const port = process.env.PORT || 8000;
const app = express();

db.connect();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/transaction", transactions);
app.use("/api/v1/categories", categories);
app.use("/api/v1/chart", chart);

app.listen(port, () => {
  console.log("Server listening at port " + port);
});
