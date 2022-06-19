import express from 'express'
import passport from 'passport'
import { UserController } from '../controllers/'
import validationMiddleware from '../middlewares/validation.middleware'
import createUserSchema from '../schemas/user.schema'

const userRouter = express.Router()

userRouter.post('/user', validationMiddleware(createUserSchema), UserController.create)
userRouter.get('/user/:id', passport.authenticate('jwt', { session: false }), UserController.listById)

export default userRouter
