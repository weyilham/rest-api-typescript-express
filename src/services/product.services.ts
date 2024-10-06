import { logger } from '../utils/logger'
import ProductModel from '../models/product.model'
import { ProductInterface } from '../types/product.type'

export const getDataProduct = async () => {
  return await ProductModel.find()
    .then((data) => {
      return data
    })
    .catch((err) => {
      logger.info('Cannot get data product')
      logger.error(err)
    })
}

export const getProductById = async (id: string) => {
  const result = await ProductModel.findById(id)

  return result
}

export const createProduct = async (payload: ProductInterface) => {
  return await ProductModel.create(payload)
}

export const updateProduct = async (id: string, payload: ProductInterface) => {
  return await ProductModel.findByIdAndUpdate(id, payload)
}

export const deleteProductById = async (id: string) => {
  return await ProductModel.findByIdAndDelete(id)
}
