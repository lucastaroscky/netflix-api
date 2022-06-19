import { Repository } from 'typeorm'
import { AppDataSource } from '../../configs/database/data-source'
import bcrypt from 'bcrypt'
import { User } from '../entities/'
import BadRequestException from '../exceptions/bad-request.exception'

interface CreateUserDTO {
  email: string;
  password: string;
}

class UserService {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = AppDataSource.getRepository(User)
  }

  async getUserById(id: number) {
    const userFound = await this.userRepository.findOne({ where: { id } })

    return userFound
  }

  async getUserByEmail(email: string) {
    const userFound = await this.userRepository.findOne({ where: { email } })

    return userFound
  }

  async create(user: CreateUserDTO) {
    const { email, password } = user
    const userAlreadyExists = await this.userRepository.findOne({ where: { email } })

    if (userAlreadyExists) {
      throw new BadRequestException('User already exists!')
    }

    const SALTS = 10

    const userPayload = {
      email,
      password: await bcrypt.hash(password, SALTS)
    }

    return this.userRepository.save(userPayload)
  }
}

export default UserService
