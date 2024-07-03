import express from "express";
import products from "./products.js"; 

const app = express();

function userCredentials(req,res,next){
  console.log(first)
  console.log(first)
  console.log(first)
}
app.get("/product", (req, res) => {
  res.json(products)
  
});

app.listen(8000, () => console.log("Server Up!"));
