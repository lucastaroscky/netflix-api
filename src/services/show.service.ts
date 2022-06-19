import { Repository } from 'typeorm'
import { AppDataSource } from '../../configs/database/data-source'
import { Show } from '../entities'
import NotFoundException from '../exceptions/not-found.exception'

type CreateShowDTO = Pick<Show, 'title' | 'director' | 'actors' | 'description' | 'cover' | 'category'>

class ShowService {
  private showRepository: Repository<Show>

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show)
  }

  private async findOne(id: number) {
    return this.showRepository.findOne({ where: { id } })
  }

  async list() {
    return this.showRepository.find()
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
    return this.showRepository.save(show)
  }

  async update(show: Partial<CreateShowDTO>, id: number) {
    await this.showRepository.update(id, show)

    return this.showRepository.findOne({ where: { id } })
  }

  async delete(id: number) {
    const show = await this.showRepository.delete(id)

    if (!show.affected) {
      throw new NotFoundException(`Show: ${id} was not found!`)
    }

    return show
  }
}

export default ShowService
