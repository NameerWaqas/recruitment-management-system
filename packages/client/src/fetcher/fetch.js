import axios from "axios";

export const privateAPI = axios.create({ baseURL: "http://40.71.41.2" });
export const attachToken = (jwt) => {
  privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};
