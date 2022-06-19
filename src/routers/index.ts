import express, { Application } from 'express'
import morgan from 'morgan'
import { errorHandlerMiddleware } from '../middlewares/error-handler.middleware'
import episodeRouter from './episode.router'
import ShowsRouter from './shows.router'
import UserRouter from './user.router'

const routes = [
  ShowsRouter,
  UserRouter,
  episodeRouter
]

function startRoutes(app: Application) {
  app.use(express.json())
  app.use(morgan('tiny'))

  app.use(errorHandlerMiddleware)

  app.use(routes)
}

export default startRoutes
