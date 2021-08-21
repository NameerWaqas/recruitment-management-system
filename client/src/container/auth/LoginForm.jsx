import React, { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { dispatchLogin } from "../../redux/reducers/sagaAction";

function LoginForm({ flipCard }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setErrorStatus] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();
  const { push } = history;

  const handleSubmit = async () => {
    setErrorStatus(false);
    dispatch(dispatchLogin({ email, password, push }));
  };

  return (
    <>
      <h3 className="text-center">Sign in to your account</h3>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </InputGroup>
      <br />
      <div className="text-center">
        <Button
          style={{ backgroundColor: "#212529" }}
          size="md"
          block
          // color="primary"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>
      <Button
        color="link"
        style={{ color: "white" }}
        block
        onClick={() => flipCard((prev) => !prev)}
      >
        Don't have account?
      </Button>
      {isError && (
        <h6 className="text-center pb-0 mb-0 text-danger">
          Invalid email or password
        </h6>
      )}
    </>
  );
}

export default LoginForm;
