const { client } = require("../db");

exports.create = ({ label, type, image }) => {
  const text =
    "INSERT INTO categories(label, type, image) VALUES($1, $2, $3) RETURNING *";
  const values = [label, type, image];
  return client.query(text, values).then((res) => {
    console.log("Category created correctly");
    const createdCategory = res.rows[0];
    return createdCategory;
  });
};

exports.findAll = () => {
  const text = `
  SELECT * FROM categories
  ORDER BY id ASC 
`;
  console.log("Finding all categories...");

  return client.query(text).then((res) => {
    return res.rows;
  });
};
