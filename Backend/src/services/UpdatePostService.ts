import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Post from '../models/Post';
import User from '../models/User';

interface Request {
  title: string;
  body: string;
  user_id: string;
  id: string;
}

export default class UpdatePostService {
  // eslint-disable-next-line class-methods-use-this
  public async execute({ title, body, user_id, id }: Request): Promise<Post> {
    const userRepository = getRepository(User);
    const postRepository = getRepository(Post);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    const post = await postRepository.findOne(id);

    if (!post) {
      throw new AppError('This posts does not exist in database!');
    }

    post.title = title;
    post.body = body;

    await postRepository.save(post);

    return post;
  }
}
