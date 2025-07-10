import userService from '@/services/users.services';
import { validate } from '@/utils/validation';
import { NextFunction, Request, Response } from 'express';
import { checkSchema } from 'express-validator';

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      error: 'Missing email or password'
    });
    return;
  }
  next();
};

export const registerValidator = validate(
  checkSchema({
    name: {
      notEmpty: {
        errorMessage: 'Name is not Empty'
      },
      isString: {
        errorMessage: 'Name must be a string'
      },
      isLength: {
        options: {
          min: 5,
          max: 255
        },
        errorMessage: 'Name must be between 5 and 255 characters'
      },
      trim: true
    },
    email: {
      notEmpty: {
        errorMessage: 'Email is not Empty'
      },
      isEmail: {
        errorMessage: 'Email is not valid'
      },
      custom: {
        options: async (value) => {
          const isExistEmail = await userService.checkEmailExists(value);
          if (isExistEmail) {
            throw new Error('Email already exists');
          }
          return true;
        }
      },
      normalizeEmail: true
    },
    password: {
      notEmpty: {
        errorMessage: 'Password is not Empty'
      },
      isString: {
        errorMessage: 'Password must be a string'
      },
      isLength: {
        options: {
          min: 6,
          max: 255
        },
        errorMessage: 'Password must be between 6 and 255 characters'
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage: 'Password must be strong'
      },
      trim: true
    },
    confirm_password: {
      notEmpty: {
        errorMessage: 'Password is not Empty'
      },
      isString: {
        errorMessage: 'Password must be a string'
      },
      isLength: {
        options: {
          min: 6,
          max: 255
        },
        errorMessage: 'Password must be between 6 and 255 characters'
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage: 'Password must be strong'
      },
      custom: {
        options: (value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Passwords confirmation does not match password');
          }
          return true;
        }
      },
      trim: true
    },
    date_of_birth: {
      isISO8601: {
        options: {
          strict: true,
          strictSeparator: true
        },
        errorMessage: 'Date of birth must be a valid date'
      }
    }
  })
);
