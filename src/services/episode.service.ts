import { Repository } from 'typeorm'
import { AppDataSource } from '../../configs/database/data-source'
import { Episode, Show } from '../entities'
import BadRequestException from '../exceptions/bad-request.exception'

type createEpisodeDTO = Pick<Episode, 'category' | 'cover' | 'description' | 'duration' | 'title'> & { showId: number }

class EpisodeService {
  private showRepository: Repository<Show>
  private episodeRepository: Repository<Episode>

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show)
    this.episodeRepository = AppDataSource.getRepository(Episode)
  }

  async create(episode: createEpisodeDTO) {
    const { showId } = episode

    const show = await this.showRepository.findOne({ where: { id: showId } })

    if (!show) {
      throw new BadRequestException(`Show id ${showId} was not found!`)
    }

    const createdEpisode = await this.episodeRepository.save(episode)

    show.episodes = [...show.episodes, createdEpisode]

    await this.showRepository.save(show)
  }
}

export default EpisodeService
