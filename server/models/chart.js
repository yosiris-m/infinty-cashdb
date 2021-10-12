const { client } = require("../db");

exports.retrieveExpensesFromDB = ({ from, to }) => {
  const text = `
SELECT SUM(transactions.amount)::int as total, categories.label, categories.image
FROM transactions
INNER JOIN categories ON transactions.fk_category_id = categories.id
WHERE categories.type = 'expense'
  AND transactions.date BETWEEN $1 AND $2
GROUP BY categories.label, categories.image
ORDER BY total DESC
`;
  const values = [from, to];
  console.log("Finding expenses...");
  console.log("values", values);

  return client.query(text, values).then((res) => {
    return res.rows;
  });
};
