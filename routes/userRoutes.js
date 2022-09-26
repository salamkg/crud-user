import {Router} from 'express'
const router = Router()
import userController from '../controller/user.controller.js'

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.get('/user-books/:id', userController.getOneUserBook)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

export default router