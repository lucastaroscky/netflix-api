import express from 'express'
import passport from 'passport'
import { EpisodeController } from '../controllers/'
import validationMiddleware from '../middlewares/validation.middleware'
import createEpisodeSchema from '../schemas/create-episode.schema'

const episodeRouter = express.Router()

episodeRouter.post('/episodes', passport.authenticate('jwt', { session: false }), validationMiddleware(createEpisodeSchema), EpisodeController.create)

export default episodeRouter
