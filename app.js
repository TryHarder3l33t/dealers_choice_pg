//npm run start test
console.log("Hello World Node is running behind the scenes");
const PORT = process.env.PORT || 8765;
const express = require("express");
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
const mainPage = require("./views/pages/mainPage");
const detail = require("./views/pages/detail");

//You use the local DB with your name on it while developing so you should seed the db. This is the connnection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  //For deployment
  ssl: {
    rejectUnauthorized: false,
  },
  //For local development
  //ssl: false,
});

const seeder = async () => {
  try {
    //await client.connect();
    const client = await pool.connect();
    fs.readFile(path.join(__dirname, "seed.sql"), async (err, data) => {
      const sql = data.toString();
      await client.query(sql);
      console.log("seeded");
    });
  } catch (ex) {
    console.log(ex);
  }
};

seeder();

express()
  .use(express.static(path.join(__dirname, "public")))

  .get("/", async (req, res) => {
    try {
      const client = await pool.connect();
      //const result = await client.query("SELECT * FROM users");
      const results = await client.query("SELECT * FROM chucksters");

      //res.render("pages/db", results);
      //res.send(results);
      //res.render("pages/main", results);
      res.send(mainPage(results.rows));

      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const client = await pool.connect();
      //const result = await client.query("SELECT * FROM users ");
      const result = await client.query(
        "SELECT * FROM chucksters WHERE id = $1",
        [req.params.id]
      );

      //res.render("pages/db", results);
      //res.send(results);
      //res.render("pages/main", results);
      res.send(detail(result.rows[0]));

      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Express is listening on ${PORT}`));

//   INSERT INTO chucksters (title_chucksters, content_chcksters, img_chucksters, date ) VALUES ('', '', '' );
