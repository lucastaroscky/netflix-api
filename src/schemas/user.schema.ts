import Joi from 'joi'
import { joiPassword } from 'joi-password'

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .required()
})

export default createUserSchema
