const { Router } = require("express");
const courseRouter = Router();

courseRouter.post('/courses/purchase ', (req, res) => {
  res.json({
     message: "buy course"
  })
})

courseRouter.get('/courses/preview ', (req, res) => {
  res.json({
     message: "buy course"
  })
})


module.exports = {
    courseRouter: courseRouter
}