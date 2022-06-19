import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
import Show from './show.entity'

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @ManyToMany(() => Show, { eager: true })
  @JoinTable()
  list: Show[]
}

export default User
