import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  NavLink,
} from "reactstrap";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import classnames from "classnames";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

// styles
import "./styles/Auth.css";

function Auth() {
  const [isShowingModal, setShowModal] = useState(true);
  const [activeTab, setActiveTab] = useState("1");
  const history = useHistory();

  const toggleTabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleModal = () => {
    setShowModal(!isShowingModal);
    history.push("/");
  };
  return (
    <div id="authContainer">
      <Modal isOpen={isShowingModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Authentication</ModalHeader>
        <Nav tabs>
          <NavItem className="w-50">
            <Link
              onClick={() => {
                toggleTabs("1");
              }}
              to="/auth/register"
              className="link"
            >
              <NavLink className={classnames({ active: activeTab === "1" })}>
                Register
              </NavLink>
            </Link>
          </NavItem>

          <NavItem className="w-50">
            <Link
              onClick={() => {
                toggleTabs("2");
              }}
              to="/auth/login"
              className="link"
            >
              <NavLink className={classnames({ active: activeTab === "2" })}>
                Login
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
        <ModalBody>
          <Switch>
            <Route exact path="/auth/register" component={RegistrationForm} />
            <Route exact path="/auth/login" component={LoginForm} />
          </Switch>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Auth;
