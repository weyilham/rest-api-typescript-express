/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidateion, updateProductValidation } from '../validate/product.validate'
import { getDataProduct, getProductById, updateProduct } from '../services/product.services'
import ProductModel from '../models/product.model'
import { v4 as uuidv4 } from 'uuid'

// getProduct
export const getProduct = async (req: Request, res: Response): Promise<any> => {
  const products = await getDataProduct()
  logger.info('endpoint: /product success')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    data: products,
  })
}

export const getProductId = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params

  // check product
  const product = await getProductById(id)
  if (!product) {
    logger.info('Error: Product not found')
    return res.status(404).send({
      status: false,
      statusCode: 404,
      message: 'Product not found',
      data: {},
    })
  } else {
    logger.info('endpoint: /product success')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      data: product,
    })
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createProduct = async (req: Request, res: Response): Promise<any> => {
  req.body.product_id = uuidv4()
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

  try {
    const product = await ProductModel.create(value)
    if (product) {
      logger.info('endpoint: add data product success')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'add data product success',
      })
    }
  } catch (err) {
    logger.info('Error: add data product failed', err)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'add data product failed',
    })
  }
}

export const updateDataProduct = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  const { error, value } = updateProductValidation(req.body)

  if (error) {
    logger.info('Error: Product validation failed', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: {},
    })
  }

  try {
    await updateProduct(id, value)
    logger.info('endpoint: update data product success')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'update data product success',
    })
  } catch (error) {
    logger.info('Error: update data product failed', error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'update data product failed',
    })
  }
}
