let express = require('express');
let app = express();
const path = require('path');

app.use("/public",express.static(`${__dirname}/public`));
console.log("Hello World");
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/views/index.html");
})
app.get("/json",(req,res)=>{
    res.json({message:"Hello json"});
})




































 module.exports = app;
