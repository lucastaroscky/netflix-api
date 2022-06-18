import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm'
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
  @JoinColumn()
  list: Show[]
}

export default User
