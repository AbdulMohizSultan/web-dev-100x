const {Router} = require("express")

const userRouter = Router();


userRouter.post('/user/signup', (req, res) => {
  res.json({
     message: "signup endpoint"

  })
})

userRouter.post('/user/signin', (req, res) => {
  res.json({
     message: "signup endpoint"
  })
})


userRouter.post('/user/purchase ', (req, res) => {
  res.json({
     message: "buy course"
  })
})



module.exports = {
    userRouter : userRouter
}
