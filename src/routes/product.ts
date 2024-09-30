import { Router, Request, Response } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

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

//add product

ProductRouter.post('/', (req: Request, res: Response) => {
  logger.info('endpoint: add data product success')

  res.status(200).send({
    status: true,
    statusCode: 200,
    data: req.body,
  })
})
