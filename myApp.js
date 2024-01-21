let express = require('express');
const bodyParser = require("body-parser");
let app = express();
const path = require('path');
require('dotenv').config()
app.use(bodyParser.urlencoded({extended: false}));
app.use(function middleware(req, res, next) {
    var string = req.method + " " + req.path + " - " + req.ip;
console.log(string)
    next();
  });

app.use("/public",express.static(`${__dirname}/public`));
console.log("Hello World");
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get("/",(req,res)=>{
res.sendFile(__dirname+"/views/index.html");
})
app.get("/json",(req,res)=>{
    let response="";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello World".toUpperCase();
      } else {
        response = "Hello World";
      }
      res.json({response})
})
app.get("/now",(req,res,next)=>{
    const now=new Date().toString();
    req.time=now;
    next();
},(req, res)=>{
res.json({time: req.time})
})
app.get("/:word/echo",(req, res)=>{
    res.json({echo:req.params.word})
})

app.get("/name", function(req, res) {
    var { first: firstName, last: lastName } = req.query;
    res.json({ name: `${firstName} ${lastName}`});
  });

app.post("/name",function(req, res) {
    var { first: firstName, last: lastName } = req.body;
    res.json({ name: `${firstName} ${lastName}`});
  })




































 module.exports = app;
