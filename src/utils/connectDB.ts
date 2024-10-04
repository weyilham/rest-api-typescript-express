import mongoose from 'mongoose'
import config from '../config/environment'
import { logger } from './logger'

mongoose
  .connect(`${config.DB}`)
  .then(() => {
    logger.info('database connected')
  })
  .catch((err) => {
    logger.info('database not connected', err)
    logger.error(err)
    process.exit(1)
  })
