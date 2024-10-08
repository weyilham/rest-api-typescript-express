import Joi from 'joi'
import UserInterface from '../types/user.type'

export const createUserValidateion = (payload: UserInterface) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().allow('', null),
  })
  return schema.validate(payload)
}
