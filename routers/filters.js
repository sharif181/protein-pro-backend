const router = require("express").Router();
const {proteinLabGraph} = require("../controllers/filters")


router.get("/protein-lab-graph", proteinLabGraph)

module.exports = router