const { Router } = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signup ", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/course", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/course/bulk", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})


module.exports = {
    adminRouter : adminRouter
}
