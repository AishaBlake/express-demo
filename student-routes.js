const express = require("express");
const students = express.Router();

let studentList = require("./student-list");

students.get("/", (req, res) => {
  res.json(studentList);
});

students.post("/", (req, res) => {
  studentList.push(req.body)
  console.log(req)
  res.json(studentList);
});

students.get("/:id", (req, res) => {
  res.json(studentList[req.params.id]);
});

students.put("/", (req, res) => {
  res.json("Updating a student..");
});

students.delete("/", (req, res) => {
  res.json("Deleting a student..");
});

module.exports = students;