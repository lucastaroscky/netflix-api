import { DataSource } from "typeorm"
import { Episode, Show, User } from "../../src/entities/"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "toor",
  database: "netflix-api",
  entities: [User, Show, Episode],
  synchronize: true
})

async function databaseInit() {
  try {
    await AppDataSource.initialize()
    console.log("Data Source has been initialized!")
  } catch (err: unknown) {
    console.error("Error during Data Source initialization", err)
  }
}

export default databaseInit
