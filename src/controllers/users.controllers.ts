import { RegisterReqBody } from '@/models/requests/User.requests';
import userService from '@/services/users.services';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import QueryString from 'qs';
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

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody, QueryString.ParsedQs>,
  res: Response
) => {
  try {
    const result = await userService.register(req.body);
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
