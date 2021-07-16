import axios from "axios";

export const privateAPI = axios.create({ baseURL: "http://localhost:5000" });
export const publicAPI = axios.create({ baseURL: "http://localhost:5000" });
export const attachToken = (jwt) => {
  privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};
