import { DataSource } from "typeorm"
import { User } from "./entities/User"

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "toor",
  database: "netflix-api",
  entities: [User],
  synchronize: true,
  logging: false
})

export default AppDataSource
