import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../redux/reducers/authReducer";
import Candidate from "./candidate/Candiate";
import Recruiter from "./drawer/Recruiter";

function Dashboard() {
  const dispatch = useDispatch();

  const getUserData = async () => {
    return await axios.get("http://localhost:1337/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
  };

  const { data, isLoading } = useQuery("userInfo", getUserData, {
    onSettled: (data) => {
      dispatch(updateAuth({ user: true, userData: data?.data }));
    },
  });

  {
    if (isLoading) {
      return (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner color="success" />
        </div>
      );
    }
  }
  return (
    <>
      {data ? (
        data.data.type == "candidate" ? (
          <Candidate />
        ) : (
          <Recruiter />
        )
      ) : (
        <Redirect to="/auth/login" />
      )}
    </>
  );
}

export default Dashboard;
