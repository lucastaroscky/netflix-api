import Joi from 'joi'
import ShowCategory from '../enums/show-category.enum'
import joiEnumOfString from '../utils/joi-custom-types.utils'

const createMovieSchema = Joi.object({
  title: Joi.string().required(),
  cover: Joi.string().required(),
  director: Joi.string().required(),
  actors: Joi.string().required(),
  description: Joi.string().required(),
  category: joiEnumOfString(ShowCategory),
  episodes: Joi.array().optional()
})

export default createMovieSchema
