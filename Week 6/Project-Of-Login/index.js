const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randommohiz "
const { use } = require('react');

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
       const  username = req.body.username;
       const  password = req.body.password;
       
       let foundUser = null;

       for(let i = 0; i< username === username ) {
        if(users[i].username === username && users[i].password === password) {
            foundUser = users[i]
        }
       }

       if (!foundUser){
        res.json({
            message: "credentiate incorrect"
        })
        return
      }else {
       const token = jwt.sign({
        username
       }, JWT_SECRET);

       res.json({
        token: token
       })
    }
    
})

app.get("/me", auth, function(req, res){
    // const token = req.headers.token;

    // const decodedDate = jwt.verify(token, JWT_SECRET);

    // if (decodedDate.username) {
        let foundUser = null; 

        for (let i =0; i < users.length; i++){
            if(users[i].username === username){
                foundUser = users[i]
            }
        }
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
)

function auth (req , res , next){

    const token = req.headers.token;
    const decodedDate = jwt.verify(token, JWT_SECRET);
    if(decodedDate.username){
    next()
    } else {
        res.json({
            message: "use"
        })
    }
}

app.get("/todo", auth, function(req , res){
    
})

app.get("/todo", auth, function(req , res){
    
})


app.get("/todo", auth, function(req , res){
    
})

app.listen(3000);