import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm"
import Show from "./show.entity"

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @ManyToMany(() => Show, { eager: true })
  list: Show[]
}


export default User
