import express from 'express'
import UserController from '../controllers/user.controller'
import validationMiddleware from '../middlewares/validation.middleware'
import createUserSchema from '../schemas/user.schema'

const userRouter = express.Router()

userRouter.post('/user', validationMiddleware(createUserSchema), UserController.create)
userRouter.get('/user/:id', UserController.listById)

export default userRouter
