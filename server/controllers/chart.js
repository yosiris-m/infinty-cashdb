const charts = require("../models/chart");

exports.getExpenses = (req, res) => {
  const { from, to } = req.query;

  if (!from) {
    return res.status(400).json({ error: "from param is required" });
  }

  if (!to) {
    return res.status(400).json({ error: "to param is required" });
  }

  charts
    .retrieveExpensesFromDB({ from, to })
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.error(err.stack);
      return res.sendStatus(500);
    });
};
