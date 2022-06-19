import express from 'express'
import passport from 'passport'

import { ShowController } from '../controllers/'
import validationMiddleware from '../middlewares/validation.middleware'
import createMovieSchema from '../schemas/create-show.schema'

const showsRouter = express.Router()

showsRouter.post('/shows', passport.authenticate('jwt', { session: false }), validationMiddleware(createMovieSchema), ShowController.create)
showsRouter.put('/shows/:id', passport.authenticate('jwt', { session: false }), ShowController.update)
showsRouter.get('/shows', passport.authenticate('jwt', { session: false }), ShowController.list)
showsRouter.get('/shows/:id', passport.authenticate('jwt', { session: false }), ShowController.listOne)
showsRouter.get('/shows/:id/episodes', passport.authenticate('jwt', { session: false }), ShowController.listShowEpisodes)
showsRouter.delete('/shows/:id', passport.authenticate('jwt', { session: false }), ShowController.delete)

export default showsRouter
