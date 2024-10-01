// product.ts
import { Router, Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidateion } from '../validate/product.validate'

export const ProductRouter: Router = Router()

// Endpoint GET untuk produk
ProductRouter.get('/', (req: Request, res: Response) => {
  logger.info('endpoint: /product success')
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [
      {
        id: 1,
        name: 'Product 1',
        price: 10000,
      },
    ],
  })
})

// Endpoint POST untuk menambahkan produk
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ProductRouter.post('/', (req: Request, res: Response): any => {
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
})
