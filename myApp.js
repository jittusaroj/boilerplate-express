let express = require('express');
let app = express();
const path = require('path');
require('dotenv').config()
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




































 module.exports = app;
