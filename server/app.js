const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const transactions = require("./routes/transaction");
const db = require("./db");

const port = process.env.PORT || 3000;
const app = express();

db.connect();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/transaction", transactions);

app.listen(port, () => {
  console.log("Server listening at port " + port);
});
