import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Post from '../models/Post';
import User from '../models/User';

import CreatePostService from '../services/CreatePostService';
import UpdatePostService from '../services/UpdatePostService';

export default class PostController {
  // eslint-disable-next-line class-methods-use-this
  public async create(request: Request, response: Response): Promise<Response> {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      body: Yup.string().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(request.body, {
      abortEarly: false,
    });

    const { title, body } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const createPost = new CreatePostService();

    const user_id = request.user.id;

    const post = await createPost.execute({
      title,
      body,
      images,
      user_id,
    });

    return response.status(201).json(post);
  }

  // eslint-disable-next-line class-methods-use-this
  public async delete(request: Request, response: Response): Promise<Response> {
    const userRepository = getRepository(User);
    const postRepository = getRepository(Post);

    const { id } = request.params;
    const user_id = request.user.id;

    const user = await userRepository.findOne(user_id);

    if (!user) {
      response
        .status(401)
        .json({ message: 'Only authenticated users can delete a post' });
    }

    const post = await postRepository.findOne(id);

    if (!post) {
      response
        .status(401)
        .json({ message: 'This posts does not exist in database!' });
    }

    await postRepository.delete(id);

    return response.json({ message: 'Post delete with success!' });
  }

  // eslint-disable-next-line class-methods-use-this
  public async update(request: Request, response: Response): Promise<Response> {
    const updatePost = new UpdatePostService();

    const { id } = request.params;

    const user_id = request.user.id;

    const { title, body } = request.body;

    const post = await updatePost.execute({
      user_id,
      title,
      body,
      id,
    });

    return response.json(post);
  }

  // eslint-disable-next-line class-methods-use-this
  public async index(request: Request, response: Response): Promise<Response> {
    const postRepository = getRepository(Post);

    const posts = await postRepository.find();

    return response.json(posts);
  }

  // eslint-disable-next-line class-methods-use-this
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const postRepository = getRepository(Post);

    const post = await postRepository.findOne(id);

    return response.json(post);
  }
}
