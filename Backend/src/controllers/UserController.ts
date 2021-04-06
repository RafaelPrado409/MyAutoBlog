import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '../models/User';

import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  // eslint-disable-next-line class-methods-use-this
  public async create(request: Request, response: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    await schema.validate(request.body, {
      abortEarly: false,
    });

    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }

  // eslint-disable-next-line class-methods-use-this
  public async index(request: Request, response: Response): Promise<Response> {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    users.map(user => {
      return delete user.password;
    });

    return response.json(users);
  }

  // eslint-disable-next-line class-methods-use-this
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(id);

    delete user.password;

    return response.json(user);
  }
}
