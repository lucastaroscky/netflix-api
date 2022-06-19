import express, { Application } from 'express'
import morgan from 'morgan'
import { errorHandlerMiddleware } from '../middlewares/error-handler.middleware'
import AuthRouter from './auth.router'
import EpisodeRouter from './episode.router'
import ShowsRouter from './shows.router'
import UserRouter from './user.router'

const routes = [
  ShowsRouter,
  UserRouter,
  EpisodeRouter,
  AuthRouter
]

function startRoutes(app: Application) {
  app.use(express.json())
  app.use(morgan('tiny'))

  app.use(errorHandlerMiddleware)

  app.use(routes)
}

export default startRoutes
