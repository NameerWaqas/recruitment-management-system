import { privateAPI } from "./fetch";

export const getJobs = async () => {
  const { data } = await privateAPI.get("/jobs");
  return data;
};
