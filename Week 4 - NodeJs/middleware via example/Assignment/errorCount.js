const express = require('express');
const app = express();

let errorCount = 0;

app.post("/user", function(req, res){
    res.status(200).json({msg: 'created dummy user'})
})


app.get("/user", function(req, res){

    // let a = 1;
    // let b = a.length.leght2;

    res.status(200).json({msg: 'created dummy user'})
});

app.get("/errorCount", function(req, res){
    res.status(200).json({errorCount})
})

app.use(function(err, req, res, next){
    res.status(404).send({})
    errorCount = errorCount + 1;
})

module.exports = app;

app.listan(3000);
