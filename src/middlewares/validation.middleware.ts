import { NextFunction, Request, Response } from 'express'
import { Schema } from 'joi'
import HTTP_STATUS from '../enums/http-status.enum'

const validationMiddleware = (schema: Schema) => async (request: Request, response: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(request.body)

    next()
  } catch (err: any) {
    response.status(HTTP_STATUS.BAD_REQUEST).json({ error: true, message: err.message })
  }
}

export default validationMiddleware
