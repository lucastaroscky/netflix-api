import { Repository } from 'typeorm'
import { AppDataSource } from '../../configs/database/data-source'
import { Episode, Show } from '../entities'
import BadRequestException from '../exceptions/bad-request.exception'
import NotFoundException from '../exceptions/not-found.exception'

type CreateEpisodeDTO = Omit<Episode, 'id'> & { showId: number }

class EpisodeService {
  private showRepository: Repository<Show>
  private episodeRepository: Repository<Episode>

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show)
    this.episodeRepository = AppDataSource.getRepository(Episode)
  }

  async create(episode: CreateEpisodeDTO) {
    const { showId } = episode

    const show = await this.showRepository.findOne({ where: { id: showId } })

    if (!show) {
      throw new BadRequestException(`Show id ${showId} was not found!`)
    }

    const createdEpisode = await this.episodeRepository.save(episode)

    show.episodes = [...show.episodes, createdEpisode]

    await this.showRepository.save(show)

    return createdEpisode
  }

  async update(episode: Partial<CreateEpisodeDTO>, id: number) {
    await this.episodeRepository.update(id, episode)

    return this.episodeRepository.findOne({ where: { id } })
  }

  async delete(id: number) {
    const show = await this.episodeRepository.delete(id)

    if (!show.affected) {
      throw new NotFoundException(`Show: ${id} was not found!`)
    }

    return show
  }
}

export default EpisodeService
