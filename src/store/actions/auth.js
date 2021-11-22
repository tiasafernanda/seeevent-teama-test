import { LOGIN_BEGIN } from './types';
import { REGISTER_BEGIN } from './types';

export const LoginAction = (body) => {
  return {
    type: LOGIN_BEGIN,
    body,
  };
};

export const RegisterAction = (body) => {
  return {
    type: REGISTER_BEGIN,
    body,
  };
};
