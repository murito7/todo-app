// const { Pool } = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "flex123",
//   host: "localhost",
//   port: 5432,
//   database: "perntodo",
// });

// module.exports = pool;

const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "flex123",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
