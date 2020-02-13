const express = require("express");
const students = express.Router();

let studentList = require("./student-list");

students.use(express.json());

students.get("/", (req, res) => {
  res.json(studentList);
});

students.get("/:id", (request, response) => {
  response.json(studentList[request.params.id]);
});

students.post("/", (req, res) => {
  studentList.push({name: req.body.name})
  res.json(studentList);
});

students.put("/", (req, res) => {
  res.json("Updating a student..");
});

students.delete("/", (req, res) => {
  res.json("Deleting a student..");
});

module.exports = students;