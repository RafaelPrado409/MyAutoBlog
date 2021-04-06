import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Post from '../models/Post';
import User from '../models/User';

interface Request {
  title: string;
  body: string;
  user_id: number;
  images: {
    path: string;
  }[];
}

export default class CreatePostService {
  // eslint-disable-next-line class-methods-use-this
  public async execute({
    title,
    body,
    images,
    user_id,
  }: Request): Promise<Post> {
    const userRepository = getRepository(User);
    const postRepository = getRepository(Post);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    const data = { title, body, images, user_id };

    const post = await postRepository.create(data);

    await postRepository.save(post);

    return post;
  }
}
