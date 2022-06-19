import express from 'express'

import MovieController from '../controllers/shows.controller'
import validationMiddleware from '../middlewares/validation.middleware'
import createMovieSchema from '../schemas/create-show.schema'

const showsRouter = express.Router()

showsRouter.post('/shows', validationMiddleware(createMovieSchema), MovieController.create)
showsRouter.put('/shows/:id', MovieController.update)
showsRouter.get('/shows', MovieController.list)
showsRouter.get('/shows/:id', MovieController.listOne)
showsRouter.get('/shows/:id/episodes', MovieController.listShowEpisodes)
showsRouter.delete('/shows/:id', MovieController.delete)

export default showsRouter
