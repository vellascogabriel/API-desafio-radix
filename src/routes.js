const { Router } = require('express');

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';


import authMiddleware from './app/middlewares/auth';
import ExerciseController from './app/controllers/ExerciseController';

const routes = new Router();



routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);


routes.post('/exercises', authMiddleware, ExerciseController.store);
routes.get('/exercises/:type', authMiddleware, ExerciseController.index);
routes.delete('/exercises/:id', authMiddleware, ExerciseController.delete);
export default routes;