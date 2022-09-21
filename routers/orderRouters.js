const router = require("express").Router()
const {addOrder} = require('../controllers/orderController')



router.post('/create', addOrder)


module.exports = router