let express = require('express');
let app = express();
const path = require('path');
require('dotenv').config()
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
    let message="Hello json";
  if(process.env.MESSAGE_STYLE==="uppercase"){
    message.toUpperCase();
  }else{
    message="Hello json";
  }
    res.json({message:message});
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




































 module.exports = app;
