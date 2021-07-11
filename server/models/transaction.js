const { client } = require("../db");

// TODO implement categoryId
exports.create = ({ amount, date, categoryId }) => {
  const text =
    "INSERT INTO transactions(amount, date) VALUES($1, $2) RETURNING *";
  const values = [amount, date];

  console.log("Creating a new transaction...");

  return client.query(text, values).then((res) => {
    console.log("Transaction created correctly");
    const createdTransaction = res.rows[0];
    return createdTransaction;
  });
};

exports.find = ({ from, to }) => {
  const text = "SELECT * FROM transactions WHERE date BETWEEN $1 AND $2";
  const values = [from, to];
  console.log("Finding transactions...");
  console.log("values", values);

  return client.query(text, values).then((res) => {
    return res.rows;
  });
};
