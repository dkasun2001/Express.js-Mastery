import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Students");
});

router.post("/create", (req, res) => {
  res.send("Create a New Student");
});

router.put("/update", (req, res) => {
  res.send("Updata Student ID");
});

router.delete("/delete", (req, res) => {
  res.send("Remove Students from the db");
});

export default router;
