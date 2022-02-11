//npm run start test
console.log("Hello World Node is running behind the scenes");
const PORT = process.env.PORT || 8765;
const express = require("express");
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
const mainPage = require("./views/pages/mainPage");
const detail = require("./views/pages/detail");
const addPost = require("./views/pages/addPost");

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

// const pool = new Pool(
//   process.env.DATABASE_URL || "postgress://localhost/ericrodgers"
// );

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
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, "public")))
  .post("/", async (req, res) => {
    try {
      const client = await pool.connect();
      console.log(req.body);
      const { image, title, content } = req.body;
      console.log(image, title, content);

      let response = await client.query(
        "INSERT INTO chucksters (title_chucksters, content_chucksters, img_chucksters ) VALUES ($1, $2, $3) RETURNING *",
        [title, content, image]
      );
      const chuck = response.rows[0];
      console.log(chuck);
      client.release();
      res.redirect(`/${chuck.id}`);
    } catch (err) {
      console.log(err);
      next();
    }
  })
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
  .get("/add", (req, res) => {
    res.send(addPost());
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
