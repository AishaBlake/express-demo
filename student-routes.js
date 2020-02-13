const express = require("express");
const students = express.Router();

let studentList = require("./student-list");

students.use(express.json());

students.get("/", (req, res) => {
  res.json(studentList);
});

students.get("/:id", (req, res) => {
  let selectedStudent = studentList[req.params.id];
  if (selectedStudent) {
    res.json(selectedStudent);
  } else {
    res.status(404).json("That student isn't in this class!");
  }
});

students.post("/", (req, res) => {
  studentList.push(req.body);
  res.status(201).json({name: req.body.name});
});

students.put("/:id", (req, res) => {
  let selectedStudent = studentList[req.params.id];
  if (selectedStudent) {
    studentList[req.params.id] = req.body;
    res.json(studentList[req.params.id]);
  } else {
    res.status(404).json("That student isn't in this class!");
  }
});

students.delete("/:id", (req, res) => {
  let selectedStudent = studentList[req.params.id];
  if (selectedStudent) {
    studentList.splice(req.params.id, 1);
    res.status(204).send();
  } else {
    res.status(404).json("That student isn't in this class!");
  }
});

module.exports = students;