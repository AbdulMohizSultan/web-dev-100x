const express  = require('express');
const cookiePraser = require('cookie-parser') 
const bcrypt = require("bcrypt");
const app = express();
const jwt = require('jsonwebtoken');

app.use(cookiePraser());

app.get("/", function(req,res){

    let token = jwt.sign({email: "mohiz@gmai.com"}, "scert");
    res.cookie("token", token)
    res.send("dones")
})


app.listen(3006);

console.log(mohiz)  