const router = require("express").Router()
const {addOrder, CreateSession} = require('../controllers/orderController')



router.post('/create', addOrder)
router.post('/create-checkout-session', CreateSession)


module.exports = router