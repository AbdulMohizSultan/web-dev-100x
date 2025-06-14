const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randommohiz "


const app = express();
app.use(express.json());

const users = [];

function logger(req, res , next) {
    console.log(req.method + "request came");
    next()
}

app.get("/", function (req, res){
    res.sendFile(__dirname + "./public/index.html")
})

app.post("/sigup", logger , function(req, res){
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

app.post("/sigin", logger , function(req, res){
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

app.get("/me", logger , auth, function(req, res){
        const token = req.headers.token;
        const currentUser = req.username;
        let foundUser = null; 

        for (let i =0; i < users.length; i++){
            if(users[i].username === currentUser){
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
        req.username = decodedDate.username; 
        next()
    } else {
        res.json({
            message: "use"
        })
    }
}


app.listen(3000);