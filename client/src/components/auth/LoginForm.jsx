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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // React Query hook to perform server mutations.
  const mutation = useMutation((user) => {
    return axios.post("http://localhost:1337/auth/local", user);
  });

  const history = useHistory();

  const handleSubmit = async () => {
    await mutation.mutate(
      {
        identifier: email,
        password,
      },
      {
        onSettled: async (data) => {
          localStorage.setItem("jwt", data?.data?.jwt);
          dispatch(updateAuth({ user: true, userData: data?.data.user }));
          history.push("/dashboard/user");
        },
      }
    );
  };

  return (
    <>
      <h2 className="text-center">Sign in to your account</h2>
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
        <Button size="md" block color="success" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </>
  );
}

export default LoginForm;
