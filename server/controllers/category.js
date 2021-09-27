const categories = require("../models/category");

exports.find = (req, res) => {
  categories
    .findAll()
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
    label: req.body.label,
    type: req.body.type,
  };

  if (data.type !== "expense" && data.type !== "income") {
    res
      .status(400)
      .json({ message: "invalid type, must be 'income' or 'expense'" });
  }

  categories
    .create(data)
    .then((createdCategory) => {
      res.status(201).json(createdCategory);
    })
    .catch((err) => {
      console.error(err.stack);
      return res.sendStatus(500);
    });
};
