const router = require("express").Router();
const {addUser, login, userList, userById, deleteUser, updateUser} = require('../controllers/userController')
const {tokenCheckMiddleware} = require('../middleware/tokenValidator')


router.post('/create', addUser)
router.post('/token', login)
router.get('/list', userList)
router.get('/:id', userById)
router.delete('/delete', deleteUser)
router.patch('/update', updateUser)



module.exports = router