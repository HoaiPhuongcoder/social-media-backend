import { NextFunction, Request, RequestHandler, Response } from 'express';

export function wrapRequestHandler(func: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
