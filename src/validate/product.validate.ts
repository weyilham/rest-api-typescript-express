import Joi from 'joi'
import { ProductInterface } from '../types/product.type'

export const createProductValidateion = (payload: ProductInterface) => {
  const schema = Joi.object({
    product_id: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    size: Joi.string().required(),
  })
  return schema.validate(payload)
}
