const router = require("express").Router();
const {tokenCheckMiddleware} = require('../middleware/tokenValidator')
const { addProduct, allProduct, productById, deleteProduct, updateProduct } = require('../controllers/productController')



router.post('/create', tokenCheckMiddleware, addProduct)
router.get('/list', tokenCheckMiddleware, allProduct)
router.get('/:id', tokenCheckMiddleware, productById)
router.delete('/delete', tokenCheckMiddleware, deleteProduct)
router.patch('/update', tokenCheckMiddleware, updateProduct)


module.exports = router