const express = require("express");
const app = express();
const port = 3000;
const students = require("./student-routes");

app.listen(port, () => console.log(`Listening on port: ${port}.`));

app.use("/students/", students);

app.get("/", (req, res) => {
  res.json("Welcome home!");
});