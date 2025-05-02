//creating an http server
//express
// node default library => no


// const express = require("express");

// const app = express();

// // function sum(n) {
// //     let ans = 0;
// //     for (let i= 1 ; i<=n ; i++) {
// //         ans = ans + 1;
// //     }
// //     return ans;
// // }

// // app.get("/", function(req, res) {
// //     const n = req.query.n;
// //     const ans = sum(n);
// //     res.send("hi your ans is " + ans);
// // })

// // app.listen(3003);




const express = require("express");
const app = express();

// Middleware to parse JSON body
app.use(express.json());

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

// GET route
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

// POST route
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;

    if (typeof isHealthy !== "boolean") {
        return res.status(400).json({ msg: "Invalid 'isHealthy' value. Must be true or false." });
    }

    users[0].kidneys.push({ healthy: isHealthy });

    res.json({ msg: "Done!" });
});

  // PUT 
app.put("/", function(req, res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({ msg: "All kidneys marked healthy" });
});

// DELETE 
app.delete("/", function(req, res){
    //you should return a 4ll
    //only if atlesat one unhealty kidney is there do this
    if(isThereatLeastOneUnhealthyKidney()){

        const newKidneys = [];

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({ healthy: true });
            }
        }
    
        users[0].kidneys = newKidneys;
        res.json({ msg: "Removed all unhealthy kidneys" });
    }else {
        res.status(411).json({
            msg:"you have no bad kidney"
        });
    }

});



function isThereatLeastOneUnhealthyKidney(){
    let atLeastOnehealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            atLeastOnehealthyKidney = true;
        }
}
// Start server
app.listen(3004, function () {
    console.log("Server is running on port 3004");
});
