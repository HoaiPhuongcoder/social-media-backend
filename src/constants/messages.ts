export const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Validation occurred',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_STRING: 'Name must be a string',
  NAME_LENGTH: 'Name must be between 5 and 255 characters',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Email is not valid',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_NOT_EXISTS: 'Email does not exist',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_STRING: 'Password must be a string',
  PASSWORD_LENGTH: 'Password must be between 6 and 255 characters',
  PASSWORD_STRENGTH:
    'Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol',

  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_BE_STRING: 'Confirm password must be a string',
  CONFIRM_PASSWORD_STRENGTH:
    'Confirm password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol',
  CONFIRM_PASSWORD_LENGTH: 'Confirm password must be between 6 and 255 characters',
  CONFIRM_PASSWORD_MUST_MATCH: 'Confirm password must match the password',
  DATE_OF_BIRTH_IS_REQUIRED: 'Date of birth is required',
  DATE_OF_BIRTH_INVALID: 'Date of birth is not valid',
  LOGIN_SUCCESS: 'Login Success',
  REGISTER_SUCCESS: 'Register Success'
} as const;
