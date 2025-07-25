const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randommohiz "
const { use } = require('react');

const app = express();
app.use(express.json());
const users = [];




app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;


    users.push({
        username: username,
        password:  password
    })

    res.json({
        message:"you are signed in"
    })
})


app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // map and filter

    let foundUsers = null;

    for(let i = 0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password) {
            foundUsers = users[i]
        }
    }

    if(foundUsers) {
        const token = jwt.sign({
            username:username
        }, JWT_SECRET);
        // foundUsers.token = token;
        res.json({
            token:token
        })
    } else {
        res.status(403).send({
            message:"Invaltd username or password"
        })
    }
})

app.get("/me", function(req,res){
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET)
    const username = decodedInformation.username
    let foundUser = null;

    for(let i =0; i < users.length; i++){
        if(users[i].username == username) {
            foundUser = users[i]
        }
    }

    if(foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message:"token invalied"
        })
    }
})

app.listen(3000);