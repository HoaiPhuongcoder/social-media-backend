import userService from '@/services/users.services';
import { Request, Response } from 'express';

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email === 'uongthanhtu@gmail11.com' && password === '12345678') {
    res.json({
      message: 'login successfully'
    });
    return;
  }
  res.status(400).json({
    message: 'Mật Khẩu sai Cút'
  });
};

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const result = await userService.register({ email, password });
    res.json({
      message: 'Register Success',
      result
    });
  } catch (error) {
    res.status(400).json({
      error: 'Register failed' + error
    });
  }
};
