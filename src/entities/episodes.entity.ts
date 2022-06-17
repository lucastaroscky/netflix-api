import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("episodes")
class Episode {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 200 })
  cover: string

  @Column({ length: 45 })
  tite: string

  @Column({ length: 45 })
  description: string

  @Column({ length: 45 })
  category: string
}

export default Episode;
