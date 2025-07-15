import HTTP_STATUS from '@/constants/httpStatus';
import { NextFunction, Request, Response } from 'express';
import { omit } from 'lodash';

export const defaultErrorHandler = (error: any, req: Request, res: Response, _next: NextFunction) => {
  res.status(error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(omit(error, ['status']));
};
