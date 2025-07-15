import HTTP_STATUS from '@/constants/httpStatus';
import { EntityError, ErrorWithStatus } from '@/models/Errors';
import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema';

export const validate = (validations: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validations.run(req);
    const errors = validationResult(req);
    const errorObject = errors.mapped();
    if (errors.isEmpty()) {
      next();
      return;
    }
    const entityError = new EntityError({ errors: {} });
    for (const key in errorObject) {
      const { msg } = errorObject[key];
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        next(msg);
        return;
      }
      entityError.errors[key] = errorObject[key];
    }

    next(entityError);
  };
};
