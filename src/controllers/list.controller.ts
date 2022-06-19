import UnauthorizedException from '../exceptions/unauthorized.exception'
import { CustomResponse, CustomRequest } from '../interfaces'
import ListService from '../services/list.service'

const listService = new ListService()

class ListController {
  public static async list(request: CustomRequest, response: CustomResponse) {
    try {
      const myList = request.loggedUser?.list

      response.json(myList)
    } catch (e) {
      console.log(`Error to list data! Details: ${JSON.stringify(request.loggedUser)}`)

      response.errorHandler && response.errorHandler(e)
    }
  }

  public static async add(request: CustomRequest, response: CustomResponse) {
    const { body: { showId }, loggedUser } = request

    try {
      if (!loggedUser) {
        throw new UnauthorizedException()
      }

      const added = await listService.add(showId, loggedUser)

      response.json(added)
    } catch (e) {
      console.log(`EError to save on list! Details: ${JSON.stringify(request.loggedUser)}`)

      response.errorHandler && response.errorHandler(e)
    }
  }

  public static async remove(request: CustomRequest, response: CustomResponse) {
    const { params: { showId }, loggedUser } = request

    try {
      if (!loggedUser) {
        throw new UnauthorizedException()
      }

      const removed = await listService.remove(+showId, loggedUser)

      response.json(removed)
    } catch (e) {
      console.log(`Error to remove list! Details: ${JSON.stringify(request.loggedUser)}`)

      response.errorHandler && response.errorHandler(e)
    }
  }
}

export default ListController
