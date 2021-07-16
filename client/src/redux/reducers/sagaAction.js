import { authLogin, authRegister } from "./sagasActionTypes";

export const dispatchLogin = (payload) => {
  return {
    type: authLogin,
    payload: payload,
  };
};

export const dispatchRegister = (payload) => {
  return {
    type: authRegister,
    payload: payload,
  };
};
