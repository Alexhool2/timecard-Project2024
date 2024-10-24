import express from 'express'
import * as UserController from '../controllers/user'
const router = express.Router()

router.get('/',UserController.getUser)
router.get('/',UserController.createUser)

export default router