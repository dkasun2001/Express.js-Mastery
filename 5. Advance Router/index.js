// 1. Create routes folder and put routes in a seperate file
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router
// 5. Import router
// 6. use the (app.use) built-in middleware & provide your routes

import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teacher.js";

const app = express();

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(8000, () => console.log("Server Up!"));
