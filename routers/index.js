const router = require("express").Router();
const userRouter = require("./userRouters")
const productRouter = require("./productRouters")
const orderRouters = require('./orderRouters')


router.use("/user", userRouter)
router.use("/product", productRouter)
router.use("/order", orderRouters)



module.exports = router