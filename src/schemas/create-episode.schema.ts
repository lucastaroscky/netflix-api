import Joi from 'joi'

const createEpisodeSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  cover: Joi.string().required(),
  duration: Joi.string().required()
})

export default createEpisodeSchema
