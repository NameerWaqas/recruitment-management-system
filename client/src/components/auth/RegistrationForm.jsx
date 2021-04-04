import React from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

function RegistrationForm() {
  return (
    <>
      <h2 className="text-center">Register for a new account</h2>
      <p className="text-center">Nulla veniam veniam cupidatat dolore nisi.</p>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
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
        <Input type="select" name="select">
          <option>Register as candidate</option>
          <option>Register as recruiter</option>
        </Input>
      </InputGroup>

      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="password" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="confirm password" />
      </InputGroup>
      <br />
      <div className="text-center">
        <Button size="md" block color="success">
          Register
        </Button>
      </div>
    </>
  );
}
export default RegistrationForm;
