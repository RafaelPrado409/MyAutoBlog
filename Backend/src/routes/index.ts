import { Router } from 'express';

import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';
import postsRouter from './posts.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/users/signIn', sessionsRouter);
routes.use('/posts', postsRouter);

export default routes;
