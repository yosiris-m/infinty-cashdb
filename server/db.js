const { Client } = require("pg");

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://postgres:123456@localhost:5433/familycash";

const client = new Client({
  connectionString,
 
  dialectoptions: {
    ssl: true, rejectUnauthorized: false,
}
});

// Set the node process time zone to UTC
// in order to retrieve the DB dates in UTC.
process.env.TZ = "UTC";

exports.client = client;

exports.connect = () => {
  console.log("Connecting to PostgreSQL...");

  client.connect();

  console.log("Connected!");
};
