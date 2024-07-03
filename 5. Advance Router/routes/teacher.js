import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teachers");
});

router.post("/create", (req, res) => {
  res.send("Create a New Teacher");
});

router.put("/update", (req, res) => {
  res.send("Updata Teacher ID");
});

router.delete("/delete", (req, res) => {
  res.send("Remove Teachers from the db");
});

export default router;
