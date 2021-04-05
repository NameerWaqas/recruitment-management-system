import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { useMutation } from "react-query";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // React Query hook to perform server mutations.
  const mutation = useMutation((user) => {
    return axios.post("http://localhost:1337/auth/local", user);
  });

  useEffect(() => {
    console.log("user Data :>> ", mutation.data);
  }, [mutation.data]);

  const handleSubmit = async () => {
    await mutation.mutate({
      identifier: email,
      password,
    });
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
