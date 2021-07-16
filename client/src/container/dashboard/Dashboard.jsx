import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { Spinner } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../redux/reducers/authReducer";
import Candidate from "./candidate/Candiate";
import Recruiter from "./recruiter/Recruiter";
import { getUserData } from "../../fetcher/auth.fetch";
import { useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const history = useHistory();
  const { data, isLoading } = useQuery(["userInfo"], getUserData, {
    cacheTime: 0,
    onSuccess: (data) => {
      dispatch(updateAuth({ user: true, userData: data?.data }));
    },
    onError: () => {
      // eslint-disable-next-line
      console.log("error");
      localStorage.removeItem("jwt");
      history.push("/");
    },
  });
  {
    if (isLoading || !user) {
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
        data?.data?.type === "candidate" ? (
          <Candidate />
        ) : (
          <Recruiter />
        )
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default Dashboard;
