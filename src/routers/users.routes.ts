import { Router } from 'express';
import { loginController, registerController } from '@/controllers/users.controllers';
import { accessTokenValidator, loginValidator, registerValidator } from '@/middlewares/users.middlewares';
import { wrapRequestHandler } from '@/utils/handlers';

const usersRouter = Router();

// router users
usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController));

usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController));

usersRouter.post(
  '/logout',
  accessTokenValidator,
  wrapRequestHandler((req, res) => {
    res.json('Hello');
  })
);

export default usersRouter;
