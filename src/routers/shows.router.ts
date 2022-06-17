import express from "express";

import MovieController from "../controllers/shows.controller";
import validationMiddleware from "../middlewares/validation.middleware";
import createMovieSchema from "../schemas/create-show.schema";

const showsRouter = express.Router()

showsRouter.get("/shows", MovieController.list)
showsRouter.post("/shows", validationMiddleware(createMovieSchema), MovieController.create)

export default showsRouter
