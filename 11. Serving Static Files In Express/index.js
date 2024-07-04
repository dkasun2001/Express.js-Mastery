import express from "express";
import path from "path";

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(
      process.cwd(),
      "./11. Serving Static Files In Express/public/index.html"
    )
  );
  //cwd-current working directory
});

app.listen(8000, () => console.log("Server Up!"));
