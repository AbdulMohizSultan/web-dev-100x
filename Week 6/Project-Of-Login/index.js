const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [];

app.post("/sigup", function(req, res){
    const username = req.body.username
    const password = req.body.password

    username.push({
        username: username,
        password: password
    })

    res.json({
        message:"You are signed in"
    })
})

app.post("/sigin", function(req, res){

})

app.get("/me", function(req, res){

})