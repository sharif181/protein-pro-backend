const router = require("express").Router()
const { addContactUs, allContactUs} = require("../controllers/contactUsController")


router.post("/create", addContactUs)
router.get("/", allContactUs)

module.exports = router