import { Router } from 'express';
import multer from 'multer';

import EnsureAuthenticated from '../midlewares/auth';
import uploadConfig from '../config/upload';

import UsersController from '../controllers/UserController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.index);
usersRouter.get('/:id', usersController.show);

usersRouter.patch(
  '/updateAvatar',
  EnsureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
