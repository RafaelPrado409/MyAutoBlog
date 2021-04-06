import * as Yup from 'yup';
import { Request, Response } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

export default class SessionsController {
  // eslint-disable-next-line class-methods-use-this
  public async create(request: Request, response: Response): Promise<Response> {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    await schema.validate(request.body, {
      abortEarly: false,
    });

    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  }
}
