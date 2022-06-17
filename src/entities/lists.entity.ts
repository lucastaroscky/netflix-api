import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lists")
class Episode {
  @PrimaryGeneratedColumn()
  id: number
}

export default Episode;
