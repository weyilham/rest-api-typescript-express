import { logger } from '../utils/logger'
import ProductModel from '../models/product.model'

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
