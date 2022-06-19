import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Show from './show.entity'

@Entity('episodes')
class Episode {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 200 })
  cover: string

  @Column({ length: 100 })
  title: string

  @Column({ type: 'text' })
  description: string

  @Column()
  duration: number

  @ManyToOne(() => Show, show => show.episodes)
  show: Show
}

export default Episode
