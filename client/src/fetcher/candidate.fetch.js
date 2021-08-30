import { privateAPI } from "./fetch";

export const getJobs = async () => {
  const { data } = await privateAPI.get("/jobs");
  return data;
};

export const getQuizQuestions = async (queryKey) => {
  const [, id] = queryKey;
  console.log("id :>> ", id);
};

export const getMessages = async ({ queryKey }) => {
  try {
    const [id = "", type = "candidate"] = queryKey[1] || "";
    const { data } = await privateAPI.get(
      `/jobs/messages?id=${id}&type=${type}`
    );
    return data;
  } catch (e) {
    console.log("e :>> ", e);
  }
};
