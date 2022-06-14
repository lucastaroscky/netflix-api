import express, { Request, Response } from "express"
import morgan from "morgan"
import AppDataSource from "./data-source"
import "reflect-metadata"
import { User } from "./entities/User"

const app: express.Application = express()

const bodyParser = express.json()

const PORT = 3000

app.use(bodyParser)
app.use(morgan("combined"))

app.get("/ping", (_request: Request, response: Response) => {
  response.send("pong")
})

AppDataSource.initialize()
  .then(() => {
    const user = new User()
    user.email = 'teste@teste.com'
    user.password = 'password'

    const repository = AppDataSource.getRepository(User)
    repository.save(user)

    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
