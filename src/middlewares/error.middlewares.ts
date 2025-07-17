import HTTP_STATUS from '@/constants/httpStatus';
import { ErrorWithStatus } from '@/models/Errors';
import { NextFunction, Request, Response } from 'express';
import { omit } from 'lodash';

export const defaultErrorHandler = (error: any, req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof ErrorWithStatus) {
    res.status(error.status).json(omit(error, ['status']));
    return;
  }
  Object.getOwnPropertyNames(error).forEach((key) => {
    Object.defineProperty(error, key, { enumerable: true });
  });
  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    message: error.message,
    errorInfo: omit(error, ['stack'])
  });
};
