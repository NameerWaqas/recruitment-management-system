import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import classnames from "classnames";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

// styles
import "./styles/Auth.css";
import { useSelector } from "react-redux";
import Header from "../header/Header";

function AuthContent() {
  const [activeTab, setActiveTab] = useState("2");

  const toggleTabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div id="authContainer">
      <Nav tabs>
        <NavItem className="w-50">
          <Link
            onClick={() => {
              toggleTabs("1");
            }}
            to="/"
            className="link"
          >
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              style={{
                border: 0,
                backgroundColor: activeTab === "1" ? "#343a40" : "#495057",
                color: "white",
              }}
            >
              Login
            </NavLink>
          </Link>
        </NavItem>

        <NavItem className="w-50">
          <Link
            onClick={() => {
              toggleTabs("2");
            }}
            to="/"
            className="link"
          >
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              style={{
                border: 0,
                borderColor: "transparent",
                backgroundColor: activeTab === "2" ? "#343a40" : "#495057",
                color: "white",
              }}
            >
              Register
            </NavLink>
          </Link>
        </NavItem>
      </Nav>
      <div style={{ padding: "10px" }}>
        {activeTab === "1" ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
}

function Auth() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user && localStorage.getItem("jwt") ? (
        <Redirect to="/dashboard/user" />
      ) : (
        <div id="container">
          <Header />
          <AuthContent />
        </div>
      )}
    </>
  );
}

export default AuthContent;
