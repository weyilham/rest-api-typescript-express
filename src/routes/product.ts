import { Router } from 'express'
// controller
import { getProduct, createProduct, getProductId } from '../controller/product.controller'

export const ProductRouter: Router = Router()

// Endpoint GET untuk produk
ProductRouter.get('/', getProduct)

// Endpoint GET untuk detail produk
ProductRouter.get('/:id', getProductId)

// Endpoint POST untuk menambahkan produk
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ProductRouter.post('/', createProduct)
