const router = require("express").Router();
const {addUser, login, userList, userById, deleteUser, updateUser} = require('../controllers/userController')
const {tokenCheckMiddleware} = require('../middleware/tokenValidator')


router.post('/create', addUser)
router.post('/token', login)
router.get('/list', tokenCheckMiddleware, userList)
router.get('/:id', tokenCheckMiddleware, userById)
router.delete('/delete', tokenCheckMiddleware, deleteUser)
router.patch('/update', tokenCheckMiddleware, updateUser)



module.exports = router