const router = require("express").Router();
const {tokenCheckMiddleware} = require('../middleware/tokenValidator')
const { addProduct, allProduct, productById, deleteProduct, updateProduct, productByType } = require('../controllers/productController')


router.get('/by_type', productByType)
router.post('/create', addProduct)
router.get('/list', allProduct)
router.get('/:id', productById)
router.delete('/delete/:id', deleteProduct)
router.patch('/update', updateProduct)


module.exports = router