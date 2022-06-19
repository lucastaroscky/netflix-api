import express from 'express'
import 'reflect-metadata'
import databaseInit from '../configs/database/data-source'
import startRoutes from './routers'

const app: express.Application = express()

const PORT = 3000

databaseInit()
startRoutes(app)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
