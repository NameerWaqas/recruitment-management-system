import React from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

function LoginForm() {
  return (
    <>
      <h2 className="text-center">Sign in to your account</h2>
      <p className="text-center">Nulla veniam veniam cupidatat dolore nisi.</p>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="email" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="password" />
      </InputGroup>
      <br />
      <div className="text-center">
        <Button size="md" block color="success">
          Login
        </Button>
      </div>
    </>
  );
}

export default LoginForm;
