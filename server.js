// import express from "express";
const express = require("express");
const hbs = require("hbs"); // template engines
const app = express();

app.set("view engine", hbs);

// app.get('/connected_user',(req, res) => {
//     res.render('user.hbs',{name:"mouadh"})
//     // res.send("hello world")
// })

// nodemon update server automatically

// app.use(date = (req,res , next) => {
//     let resquestAt = new Date()
//     console.log(resquestAt)
//     next() // deblock the server!!
// })

// addRequestDate = (req, res, next) => {
//     let requestAt = new Date()
//     // console.log(requestAt)
//     const time=requestAt.getHours()
// }
let requestAt = new Date();
//const time=requestAt.getHours()
const time = 19;
if (time < 8 || time > 17) {
  app.use(function(req, res, next) {
    res.send("<h1>Our office is not open now<h1>");
  });
} else {
  app.use(express.static(__dirname + "/public")); // dynamic routes
}

// static
// send just data & sendFile a file

// app.get('/home/:name',(req,res)=>{
//    console.log(req.params.name)
//    res.send(req.params.name +' : is connected')
// })

// app.use(express.static(__dirname + "/public")); // dynamic routes

// app.get("/home", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.listen(3000, err => {
  console.log(time);
  if (err) console.log("Server is not running");
  else console.log("server is running on port 3000");
});

// midlleware app.use(req,res,next)  or function
