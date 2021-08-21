import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

// styles
import "./styles/Auth.css";

function AuthContent() {
  const [isFlipped, flipCard] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} style={{ width: "80%" }}>
      <div id="authContainer">
        <div style={{ padding: "10px" }}>
          <RegistrationForm flipCard={flipCard} />
        </div>
      </div>
      <div
        style={{
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "10px" }} id="authContainer">
          <LoginForm flipCard={flipCard} />
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default AuthContent;
