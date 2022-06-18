import express, { Application } from "express"
import morgan from "morgan"
import ShowsRouter from "./shows.router"

const routes = [
  ShowsRouter
]

function startRoutes(app: Application) {
  app.use(express.json())
  app.use(morgan('tiny'))

  app.use(routes)
}

export default startRoutes
