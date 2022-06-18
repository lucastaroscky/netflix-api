import HTTP_STATUS from '../enums/http-status.enum'
import HttpException from './http.exception'

class Unauthorized extends HttpException {
  constructor(message = 'Unauthorized') {
    super(message, HTTP_STATUS.UNAUTHORIZED)
  }
}

export default Unauthorized
