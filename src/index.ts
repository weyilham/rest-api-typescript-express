import express, { Request, Response } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'

import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = 4000

//parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//cors
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.use('/health', (req: Request, res: Response) => {
  res.status(200).send({
    status: '200',
    data: 'hello world',
  })
})

routes(app)

app.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`)
})
