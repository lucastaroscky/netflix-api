import { Request } from 'express'
import HTTP_STATUS from '../enums/http-status.enum'
import { CustomResponse } from '../interfaces/custom-response.interface'
import MovieService from '../services/show.service'

const movieRepository = new MovieService()

class MovieController {
  public static async list(_request: Request, response: CustomResponse) {
    try {
      const show = await movieRepository.list()

      response.status(HTTP_STATUS.OK).json(show)
    } catch (err) {
      response.errorHandler && response.errorHandler(err)
    }
  }

  public static async listOne(request: Request, response: CustomResponse) {
    const { params: { id } } = request

    try {
      const show = await movieRepository.listOne(+id)

      response.status(HTTP_STATUS.OK).json(show)
    } catch (err) {
      response.errorHandler && response.errorHandler(err)
    }
  }

  public static async create(request: Request, response: CustomResponse) {
    const show = request.body

    try {
      const result = await movieRepository.create(show)

      response.status(HTTP_STATUS.CREATED).json(result)
    } catch (err) {
      response.errorHandler && response.errorHandler(err)
    }
  }

  public static async update(request: Request, response: CustomResponse) {
    const { params: { id } } = request
    const show = request.body

    try {
      const result = await movieRepository.update(show, +id)

      response.status(HTTP_STATUS.OK).json(result)
    } catch (err) {
      response.errorHandler && response.errorHandler(err)
    }
  }

  public static async delete(request: Request, response: CustomResponse) {
    const { params: { id } } = request

    try {
      await movieRepository.delete(+id)

      response.status(HTTP_STATUS.OK).json({ deleted: true })
    } catch (err) {
      response.errorHandler && response.errorHandler(err)
    }
  }

  public static async listShowEpisodes(request: Request, response: CustomResponse) {
    const { params: { id } } = request

    try {
      const episodes = await movieRepository.listShowEpisodes(+id)

      response.status(HTTP_STATUS.OK).json(episodes)
    } catch (err) {
      response.errorHandler && response.errorHandler(err)
    }
  }
}

export default MovieController
