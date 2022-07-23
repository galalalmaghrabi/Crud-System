const router = require('express').Router()
const userController = require('../controllers/user.controller')
router.post('/add-user',userController.addUser)
router.post('/edit-user',userController.editUser)

router.post('/delete',userController.del)
router.get('/',userController.getAllUser)
router.get('/:id',userController.getUser)

module.exports = router