import { privateAPI } from "./fetch";

export const getQuizById = async ({ queryKey }) => {
  const [, id] = queryKey;
  const { data } = await privateAPI.get("/jobs/quiz", {
    params: { quizId: id },
  });
  return data;
};

export const postQuiz = (payload) => {
  try {
    const { data } = privateAPI.post("/jobs/quiz", payload);
  } catch (e) {
    console.log("e :>> ", e);
  }
};
