import express from 'express'
import EpisodeController from '../controllers/episode.controller'

const episodeRouter = express.Router()

episodeRouter.post('/episodes', EpisodeController.create)

export default episodeRouter
