import express from "express";
import {
  allStudents,
  newStudents,
  updateStudents,
  deleteStudents,
} from "../controllers/student.js";

const router = express.Router();

router.get("/all", allStudents);
router.post("/create", newStudents);
router.put("/update", updateStudents);
router.delete("/delete", deleteStudents);

export default router;
