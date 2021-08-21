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
import { dispatchRegister } from "../../redux/reducers/sagaAction";

function RegistrationForm({ flipCard }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("recruiter");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const { push } = history;
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // eslint-disable-next-line
    password === confirmPassword
      ? dispatch(dispatchRegister({ username, email, password, type, push }))
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
        <Button
          style={{ backgroundColor: "#212529" }}
          size="md"
          block
          onClick={handleSubmit}
        >
          Register
        </Button>
      </div>
      <Button
        color="link"
        style={{ color: "white" }}
        block
        onClick={() => flipCard((prev) => !prev)}
      >
        Already have account?
      </Button>
    </>
  );
}
export default RegistrationForm;
