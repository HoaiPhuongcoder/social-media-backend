import { USERS_MESSAGES } from '@/constants/messages';
import { LogoutReqBody, RegisterReqBody } from '@/models/requests/User.requests';
import User from '@/models/schemas/User.schema';
import userService from '@/services/users.services';
import { Request, Response } from 'express';
import { NextFunction, ParamsDictionary } from 'express-serve-static-core';
import { ObjectId } from 'mongodb';
import QueryString from 'qs';
export const loginController = async (req: Request, res: Response) => {
  const user = req.user as User;
  const user_id = user._id as ObjectId;
  const result = await userService.login(user_id.toString());
  res.json({
    message: USERS_MESSAGES.LOGIN_SUCCESS,
    result
  });
};

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody, QueryString.ParsedQs>,
  res: Response,
  _next: NextFunction
) => {
  const result = await userService.register(req.body);
  res.json({
    message: USERS_MESSAGES.REGISTER_SUCCESS,
    result
  });
};

export const logoutController = async (
  req: Request<ParamsDictionary, any, LogoutReqBody, QueryString.ParsedQs>,
  res: Response
) => {
  const { refresh_token } = req.body;
  const result = await userService.logout(refresh_token);
  res.json(result);
};
