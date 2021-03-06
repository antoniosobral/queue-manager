import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionControler';
import PasswordController from './app/controllers/PasswordController';
import MailController from './app/controllers/MailController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/mail', MailController.store);

routes.get('/', (req, res) => res.send('ok'));

routes.use(authMiddleware);
routes.post('/passwords', PasswordController.store);
routes.get('/passwords', PasswordController.index);
routes.put('/passwords', PasswordController.update);

routes.put('/users', UserController.update);

export default routes;
