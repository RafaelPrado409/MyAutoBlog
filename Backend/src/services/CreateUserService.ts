import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  // eslint-disable-next-line class-methods-use-this
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new AppError('User already exists');
    }

    const data = {
      name,
      email,
      password,
    };

    const user = await userRepository.create(data);

    await userRepository.save(user);

    return user;
  }
}
