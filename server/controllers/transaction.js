const transactions = require("../models/transaction");

exports.find = (req, res) => {
  const { from, to } = req.query;

  if (!from) {
    return res.status(400).json({ error: "from param is required" });
  }

  if (!to) {
    return res.status(400).json({ error: "to param is required" });
  }

  transactions
    .find({ from, to })
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.error(err.stack);
      return res.sendStatus(500);
    });
};

exports.create = (req, res) => {
  const data = {
    amount: req.body.amount,
    date: req.body.date,
    categoryId: req.body.categoryId,
  };

  transactions
    .create(data)
    .then((createdTransaction) => {
      res.status(201).json(createdTransaction);
    })
    .catch((err) => {
      console.error(err.stack);
      return res.sendStatus(500);
    });
};
