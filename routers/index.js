const router = require("express").Router();
const userRouter = require("./userRouters")
const productRouter = require("./productRouters")


router.use("/user", userRouter)
router.use("/product", productRouter)



module.exports = router