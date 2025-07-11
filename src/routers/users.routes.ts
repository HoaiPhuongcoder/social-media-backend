import { Router } from 'express';
import { loginController, registerController } from '@/controllers/users.controllers';
import { loginValidator, registerValidator } from '@/middlewares/users.middlewares';
import { wrapRequestHandler } from '@/utils/handlers';

const usersRouter = Router();

// router users
usersRouter.post('/login', loginValidator, loginController);

// Description: Register a new user

// Method: POST
//Body: { name:string, email: string, password: string, confirm_password: string, date_of_birth: ISODate, username: string }

usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController));

export default usersRouter;
