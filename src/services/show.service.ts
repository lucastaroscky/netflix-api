import { Repository } from 'typeorm'
import { AppDataSource } from '../../configs/database/data-source'
import { Show } from '../entities'
import NotFoundException from '../exceptions/not-found.exception'

type CreateShowDTO = Pick<Show, 'title' | 'director' | 'actors' | 'description' | 'cover' | 'category'>

class ShowService {
  private movieRepository: Repository<Show>

  constructor() {
    this.movieRepository = AppDataSource.getRepository(Show)
  }

  private async findOne(id: number) {
    return this.movieRepository.findOne({ where: { id } })
  }

  async list() {
    return this.movieRepository.find()
  }

  async listOne(id: number) {
    const show = await this.findOne(id)

    if (!show) {
      throw new NotFoundException(`Show id ${id} was not found!`)
    }

    return show
  }

  async listShowEpisodes(id: number) {
    const { episodes } = await this.listOne(id)

    return episodes
  }

  async create(show: CreateShowDTO) {
    return this.movieRepository.save(show)
  }

  async update(show: Partial<CreateShowDTO>, id: number) {
    await this.movieRepository.update(id, show)

    return this.movieRepository.findOne({ where: { id } })
  }

  async delete(id: number) {
    const show = await this.movieRepository.delete(id)

    if (!show.affected) {
      throw new NotFoundException(`Show: ${id} was not found!`)
    }

    return show
  }
}

export default ShowService
