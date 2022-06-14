import "reflect-metadata"
import express, { Request, Response } from "express"
import morgan from "morgan"

const app = express()

const bodyParser = express.json()

const PORT = 3000

app.use(bodyParser)
app.use(morgan("combined"))

app.get("/ping", (_request: Request, response: Response) => response.send("pong"))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
