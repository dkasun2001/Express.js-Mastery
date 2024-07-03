import express from "express";

const allStudents = (req, res) => {
  res.send("All Students");
};

const newStudents = (req, res) => {
  res.send("Create new user");
};

const updateStudents = (req, res) => {
  res.send("Update User");
};

const deleteStudents = (req, res) => {
  res.send("Delete Useer");
};

export { allStudents, newStudents, updateStudents, deleteStudents };
