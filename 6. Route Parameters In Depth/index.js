import express from "express";
const app = express();

//----------Route Params

/* app.get("/ecom/products/iphone/:model", (req, res) => {
  const { model } = req.params;
  res.send(`Iphone ${model} Pro Max`);
  // res.send(''iphone',req.params.model,'Pro Max'')
}); */

/* app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product Category: (${category}) & Product ID: (${id})`);
}); */

/* app.get("/product/order/:day/:month/:year", (req, res) => {
  const { day,month,year } = req.params;
  res.send(`Product was orderd on: ${day}/${month}/${year}`);
}); */


//----------App Param

app.param("id",(req,res,next,id)=>{
    console.log(`id: ${id}`)
    next()
})

app.get("/user/:id", (req, res ) => {
  console.log(`This is user id path`);
  res.send("responce ok")
  
});


app.listen(8000, () => console.log("Server Up!"));
