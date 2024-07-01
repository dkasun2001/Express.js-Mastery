//Create folder
//npm init -y
//npm i express
//create instance express
//provide port:8000
//Basic Route
//npm i nodemon

import express from "express";

const app = express();

//------------------------------------------------------ Basic Routing

/* app.get("/", (req, res) => {
  res.send("<h1>Welcome to HOME</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About 😁</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT PAGE</h1>");
}); */

//------------------------------------------------------ Advance Routing

//----------------------------String Pattern

/* app.get("/ab?cd", (req, res) =>{
    res.send("If the user hit (acd) or (abcd) then this will run.")
}) */

//----------------------------Regex

/* app.get(/x/, (req, res) => {
  res.send("If the path includes the letter (x) it will work.example: /applex /kxun /xkasf");
});  */

/* app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("URLs with exactly four digits after  /users/3456 ");
}); */

/* app.get('/products/iphone', (req, res) => {
  res.send("This code will only run if you provide /products/iphone ");
}); */

/* app.get("/products/product/product-details", (req, res) => {
  res.send("This code will only run if you provide /products/product/product-details ");
}); */

//------------------------------------------------------ Req and Res Advance Topics

/* app.get(
  "/double-cb",
  (req, res, next) => {
    console.log("first callback");
    next();
  },
  (req, res) => {
    res.send("second callback");
  }
); */

// -----------------

/* const cb1 = (req, res, next) => {
  console.log("First Callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second Callback");
  next();
};

const cb3 = (req, res) => {
  console.log("Third Callback");
  res.send("Array of Callbacks");
};

app.get("/array-cb", [cb1, cb2, cb3]); */

// -----------------

const cb1 = (req, res, next) => {
  console.log("First Callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second Callback");
  next();
};
app.get(
  "/crazyness",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third Callback");
    next();
  },
  (req, res, next) => {
    console.log("Fourth Callback");
    res.send("crazyness");
  }
);

//------------------------------------------------------ Postman and App.route()
//------------------------------------------------------ Advance Router
//------------------------------------------------------ Route Parameters In Depth
//------------------------------------------------------ Controllers In Depth
//------------------------------------------------------ Query String In Depth
//------------------------------------------------------ Sending JSON
//------------------------------------------------------ Express Middleware's In Depth
//------------------------------------------------------ Serving Static Files In Express
//------------------------------------------------------ Template Engine Setup
//------------------------------------------------------ EJS Crash Course
//------------------------------------------------------ Outro

app.listen(8000, () => console.log("Server Up!"));
