const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node",
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("mysql conntecd");
  }
});
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("Server listen at port 8000");
});
