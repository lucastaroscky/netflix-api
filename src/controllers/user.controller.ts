import { Request } from 'express'
import HTTP_STATUS from '../enums/http-status.enum'
import { CustomResponse } from '../interfaces/custom-response.interface'
import UserService from '../services/user.service'

const userRepository = new UserService()

class UserContoller {
  public static async create(request: Request, response: CustomResponse) {
    const { body } = request

    try {
      const user = await userRepository.create(body)

      response.status(HTTP_STATUS.CREATED).json({ id: user.id, email: user.email })
    } catch (err) {
      response.errorHandler && response.errorHandler(err)
    }
  }

  public static async listById(request: Request, response: CustomResponse) {
    const { id } = request.params

    try {
      const user = await userRepository.getUserById(+id)

      response.status(HTTP_STATUS.OK).json({
        id: user?.id,
        email: user?.email,
        list: user?.list
      })
    } catch (err) {
      response.errorHandler && response.errorHandler(err)
    }
  }
}

export default UserContoller
