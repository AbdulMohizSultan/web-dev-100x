const express = require("express");

const {UserModel, TodoModel} = require("./db");
const { message } = require("statuses");
const app = express();
const jwt = require("jsonwebtoken");
const { use } = require("react");
const  mongoose = require("mongoose");
const JWT_SECRET = "asdasd12@123";


mongoose.connect("mongodb+srv://abdulmohiz1000:mohiz%4012345@cluster0.o1rssvc.mongodb.net/todo-app-database")

app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});

app.post("/signin ", async  function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
        password:password
    })

 console.log(user)

    if(user) {
        const token = jwt.sign({
            id:user._id
        }, JWT_SECRET);
        res.json({
          token:token
    })
    }else {
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
});

app.post("/todo", function(req, res){

});

app.get("/todos", function(req, res){

});


app.listen(3000)