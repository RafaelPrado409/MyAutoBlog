import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import User from '../models/User';
import AppError from '../errors/AppError';
import Post from '../models/Post';
import ImagePost from '../models/ImagePost';

interface Request {
  // eslint-disable-next-line camelcase
  user_id: string;
  post: string;
  images: Express.Multer.File[];
  newImagePost: ImagePost[];
}

export default class UpdatePostImagesService {
  // eslint-disable-next-line class-methods-use-this
  public async execute({
    user_id,
    images,
    post,
  }: Request): Promise<ImagePost[]> {
    const userRepository = getRepository(User);
    const postRepository = getRepository(Post);
    const imagePostRepository = getRepository(ImagePost);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    const postExists = await postRepository.findOne(post);

    if (!postExists) {
      throw new AppError('This posts does not exist!.', 401);
    }

    const imagePost = await imagePostRepository.find({ where: { post } });

    imagePost.map(async image => {
      if (image.path) {
        const postImagesFilePath = path.join(
          uploadConfig.directory,
          image.path,
        );
        const postImageFileExists = await fs.promises.stat(postImagesFilePath);
        if (postImageFileExists) {
          await fs.promises.unlink(postImagesFilePath);
        }
      }
    });

    const [firstImagePost, secondImagePost] = imagePost;

    const [firstPath, secondPath] = images;

    const newImagePost = [
      {
        path: (firstImagePost.path = firstPath.filename),
        post: Number(post),
      },
      {
        path: (secondImagePost.path = secondPath.filename),
        post: Number(post),
      },
    ];

    await imagePostRepository.save((newImagePost as unknown) as ImagePost);

    return (newImagePost as unknown) as ImagePost[];
  }
}
