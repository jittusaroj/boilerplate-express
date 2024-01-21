let express = require('express');
let app = express();
const path = require('path');

app.use("/public",express.static(`${__dirname}/public`));
console.log("Hello World");
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
console.log("Hello Express");
console.log(__dirname);
res.sendFile(__dirname+"/views/index.html");
})


































 module.exports = app;
