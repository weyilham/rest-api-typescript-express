/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidateion } from '../validate/product.validate'
import { getDataProduct } from '../services/product.services'
import ProductModel from '../models/product.model'

// getProduct
export const getProduct = async (req: Request, res: Response): Promise<any> => {
  const products = await getDataProduct()

  const {
    params: { id },
  } = req

  if (id) {
    const product = await ProductModel.findById(id).exec()
    if (product === undefined) {
      logger.info('endpoint: /product detail failed')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Product not found',
        data: {},
      })
    }

    if (product) {
      logger.info('endpoint: /product detail success')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        data: product,
      })
    }
  }

  logger.info('endpoint: /product success')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    data: products,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createProduct = (req: Request, res: Response, next: NextFunction): any => {
  const { error, value } = createProductValidateion(req.body)
  if (error) {
    logger.info('Error: Product validation failed', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: {},
    })
  }
  logger.info('endpoint: add data product success')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'add data product success',
    data: value,
  })

  next()
}
