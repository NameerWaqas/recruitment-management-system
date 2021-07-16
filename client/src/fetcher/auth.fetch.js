import { privateAPI, publicAPI } from "./fetch";

export const getUserData = async () => {
  return await privateAPI.get("/users/me");
};

export const getUserLogin = async (payload) => {
  const { data } = await publicAPI.post("/users/login", payload);
  return data;
};

export const getUserRegister = async (payload) => {
  const { data } = await publicAPI.post("/users/register", payload);
  return data;
};
