import { Request, Response } from 'express';

import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  // eslint-disable-next-line class-methods-use-this
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    console.log(request.file.filename);

    delete user.password;

    return response.json(user);
  }
}
