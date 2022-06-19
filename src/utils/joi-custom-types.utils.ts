import Joi from 'joi'

const joiEnumOfString = (enumerator: Object) => {
  return Joi.valid(...Object.values(enumerator))
}

export default joiEnumOfString
