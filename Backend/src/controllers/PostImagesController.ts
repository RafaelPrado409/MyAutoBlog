import { Request, Response } from 'express';
import UpdatePostImagesService from '../services/UpdatePostImagesService';

export default class PostImagesController {
  // eslint-disable-next-line class-methods-use-this
  public async update(request: Request, response: Response): Promise<Response> {
    const updateImagesPost = new UpdatePostImagesService();

    const user_id = request.user.id;

    const post = request.params.id;

    const images = request.files as Express.Multer.File[];

    const posts = await updateImagesPost.execute({
      user_id,
      post,
      images,
    });

    return response.json(posts);
  }
}
