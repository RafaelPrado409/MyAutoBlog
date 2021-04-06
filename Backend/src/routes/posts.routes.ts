import { Router } from 'express';
import multer from 'multer';

import EnsureAuthenticated from '../midlewares/auth';
import uploadConfig from '../config/upload';
import PostController from '../controllers/PostsController';
import PostImagesController from '../controllers/PostImagesController';

const postsRouter = Router();
const postsController = new PostController();
const postImagesController = new PostImagesController();
const upload = multer(uploadConfig);

postsRouter.post(
  '/',
  EnsureAuthenticated,
  upload.array('images'),
  postsController.create,
);

postsRouter.get('/', EnsureAuthenticated, postsController.index);
postsRouter.get('/:id', EnsureAuthenticated, postsController.show);
postsRouter.delete('/:id', EnsureAuthenticated, postsController.delete);
postsRouter.put('/:id', EnsureAuthenticated, postsController.update);
postsRouter.put(
  '/:id/updateImg',
  EnsureAuthenticated,
  upload.array('images'),
  postImagesController.update,
);

export default postsRouter;
