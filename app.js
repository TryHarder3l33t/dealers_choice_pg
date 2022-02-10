//npm run start test
console.log("Hello World Node is running behind the scenes");
const PORT = process.env.PORT || 8765;
const express = require("express");
const { reset } = require("nodemon");
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  //For deployment
  ssl: {
    rejectUnauthorized: false,
  },
  //For local development
  //ssl: false,
});

express()
  .get("/", (req, res) => {
    res.send("HELLO Express");
  })
  .listen(PORT, () => console.log(`Express is listening on ${PORT}`));
