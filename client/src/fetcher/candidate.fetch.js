import { privateAPI } from "./fetch";

export const getJobs = async () => {
  const { data } = await privateAPI.get("/jobs");
  return data;
};

export const getQuizQuestions = async (queryKey) => {
  const [, id] = queryKey;
  console.log("id :>> ", id);
};
