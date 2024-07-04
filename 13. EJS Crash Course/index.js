import express from "express";
import { join } from "path";


const app = express();

app.set("view engine", "ejs");
app.use(express.static(join(process.cwd(), "13. EJS Crash Course")));



app.listen(8000, () => console.log("Server Up!"));

