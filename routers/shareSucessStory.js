const router = require("express").Router()
const { addShareSucessStory, allStories} = require("../controllers/shareSuccessStory")


router.post("/create", addShareSucessStory)
router.get("/", allStories)

module.exports = router