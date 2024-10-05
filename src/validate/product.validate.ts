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

export const updateProductValidation = (payload: ProductInterface) => {
  const schema = Joi.object({
    name: Joi.string().allow('', null),
    price: Joi.number().allow(null, 0),
    size: Joi.string().allow('', null),
  })
  return schema.validate(payload)
}
