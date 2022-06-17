import "reflect-metadata"
import express from "express"

import databaseInit from "./configs/database/data-source"
import startRoutes from "./src/routers"

const app: express.Application = express()

const PORT = 3000

databaseInit()
startRoutes(app)

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})
