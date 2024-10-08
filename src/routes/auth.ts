import { Router } from 'express'
import { createUser } from '../controller/auth.controller'
// controller

export const AuthRouter: Router = Router()

AuthRouter.post('/register', createUser)
