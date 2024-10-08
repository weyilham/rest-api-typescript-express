import { Request, Response } from 'express'
import { createUserValidateion } from '../validate/auth.validate'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger'
import { userRegister } from '../services/auth.services'
import { encryptPassword } from '../utils/hasing'

interface RegistrationResponse {
  status: boolean
  statusCode: number
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUser = async (req: Request, res: Response): Promise<RegistrationResponse | any> => {
  req.body.user_id = uuidv4()

  const { error, value } = createUserValidateion(req.body)

  if (error) {
    logger.info('Error: User validation failed', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
    })
  }
  try {
    value.password = await encryptPassword(value.password)
    await userRegister(value)

    logger.info('endpoint: add data user success')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'add data user success',
    })
  } catch (err) {
    logger.info('Error: authentication failed', err)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'create user failed',
    })
  }
}
