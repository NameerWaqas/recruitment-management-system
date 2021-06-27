import React, { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { useMutation } from "react-query";
import axios from "axios";
import { updateAuth } from "../../redux/reducers/authReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { attachToken } from "../../Fetcher/fetch";

function LoginForm({ flipCard }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setErrorStatus] = useState(false);

  const dispatch = useDispatch();

  // React Query hook to perform server mutations.
  const mutation = useMutation((user) => {
    return axios.post("http://localhost:5000/users/login", user);
  });

  const history = useHistory();

  const handleSubmit = async () => {
    setErrorStatus(false);
    await mutation.mutate(
      {
        email,
        password,
      },
      {
        onSuccess: async (data) => {
          if (data) {
            localStorage.setItem("jwt", data?.data?.jwt);
            attachToken(data?.data?.jwt);
            dispatch(updateAuth({ user: true, userData: data?.data }));
            history.push("/dashboard/user");
          } else {
            setErrorStatus(true);
          }
        },
        onerror: () => {
          setErrorStatus(true);
        },
      }
    );
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
