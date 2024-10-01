import { Router } from 'express'
// controller
import { getProduct, createProduct } from '../controller/product.controller'

export const ProductRouter: Router = Router()

// Endpoint GET untuk produk
ProductRouter.get('/', getProduct)

// Endpoint GET untuk detail produk
ProductRouter.get('/:id', getProduct)

// Endpoint POST untuk menambahkan produk
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ProductRouter.post('/', createProduct)
