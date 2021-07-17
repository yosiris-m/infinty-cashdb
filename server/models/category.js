const { client } = require("../db");

exports.create = ({ label }) => {
  const text = "INSERT INTO categories(label) VALUES($1)  RETURNING *";
  const values = [label];
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
