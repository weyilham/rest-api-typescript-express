import { NextFunction, Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidateion } from '../validate/product.validate'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProduct = (req: Request, res: Response, next: NextFunction): any => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10000,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20000,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30000,
    },
  ]
  const {
    params: { id },
  } = req

  if (id) {
    const product = products.find((product) => product.id === Number(id))
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

  next()
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
