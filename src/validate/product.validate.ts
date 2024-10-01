import Joi from 'joi'

interface ProductInterface {
  name: string
  price: number
}

export const createProductValidateion = (payload: ProductInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
  })
  return schema.validate(payload)
}
