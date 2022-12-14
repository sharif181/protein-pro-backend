const router = require("express").Router();
const userRouter = require("./userRouters")
const productRouter = require("./productRouters")
const orderRouters = require('./orderRouters')
const contactUsRouters = require('./contactUs')
const shareSuccessStory = require('./shareSucessStory')
const proteinTable = require('./proteinTable')
const filters = require("./filters")


router.use("/user", userRouter)
router.use("/product", productRouter)
router.use("/order", orderRouters)
router.use("/contact-us", contactUsRouters)
router.use("/share-sucess-story", shareSuccessStory)
router.use("/import-protein-table", proteinTable)
router.use("/filter", filters)



module.exports = router