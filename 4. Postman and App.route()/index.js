import express from "express";
const app = express();

/* // Ugly Code
app.get("/students", (req, res) => {
  res.send("All Students");
});

app.post("/students", (req, res) => {
  res.send("Add New Students");
});

app.put("/students", (req, res) => {
  res.send("Update Student");
});

app.delete("/students", (req, res) => {
  res.send("Deletw Student");
}); */

//  Refactor

app
  .route("/students")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add New Students"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));


app.listen(8000, () => console.log("Server Up!"));
