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
  };
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
