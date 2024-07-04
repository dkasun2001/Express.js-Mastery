import express from "express";
import userCredentials from "./middlewares/logs.js";
const app = express();

app.use(userCredentials);

/* 

1. Request
2. Middleware
3. Responce 

*/

/* app.get("/",userCredentials, (req, res) => {
  res.send("<h2>Hello Dinusha Kasun Heenatiyangala</h2>");
}); */

app.get("/", (req, res) => {
  res.send("<h2>Hello Dinusha Kasun Heenatiyangala</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About Section</h2>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact Section</h2>");
});

app.listen(8000, () => console.log("Server Up!"));
