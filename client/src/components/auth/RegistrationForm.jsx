import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { useMutation } from "react-query";
import axios from "axios";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("recruiter");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mutation = useMutation(async (user) => {
    return await axios.post("http://localhost:1337/auth/local/register", user);
  });

  useEffect(() => {
    console.log("user Data :>> ", mutation.data);
  }, [mutation.data]);

  const handleSubmit = async () => {
    password == confirmPassword
      ? mutation.mutate({
          username,
          email,
          password,
          type,
        })
      : null;
  };
  return (
    <>
      <h2 className="text-center">Register for a new account</h2>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputGroup>
      <br />
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
          type="select"
          name="select"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="recruiter">Register as recruiter</option>
          <option value="candidate">Register as candidate</option>
        </Input>
      </InputGroup>
      <br />
      {type === "candidate" ? (
        <>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input
              type="select"
              name="select"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="recruiter" disabled>
                Job type
              </option>
              <option value="recruiter">Full time job</option>
              <option value="candidate">Part time job</option>
              <option value="candidate">Remote job</option>
              <option value="candidate">Freelancing</option>
              <option value="candidate">Internship</option>
            </Input>
          </InputGroup>
          <br />
        </>
      ) : null}
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
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
      </InputGroup>
      <br />
      <div className="text-center">
        <Button size="md" block color="success" onClick={handleSubmit}>
          Register
        </Button>
      </div>
    </>
  );
}
export default RegistrationForm;
