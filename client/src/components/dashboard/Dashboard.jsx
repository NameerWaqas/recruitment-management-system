import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../../redux/reducers/authReducer";
import Candidate from "./Candiate";

function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const getUserData = async () => {
    return await axios.get("http://localhost:1337/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
  };

  const { data, isLoading } = useQuery("userInfo", getUserData, {
    onSettled: (data) =>
      dispatch(updateAuth({ user: true, userData: data?.data.user })),
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
  return <>{user || data ? <Candidate /> : <Redirect to="/auth/login" />}</>;
}

export default Dashboard;
