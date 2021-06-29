import axios from "axios";

export const getUserData = async () => {
  return await axios.get("http://40.71.41.2/users/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};
