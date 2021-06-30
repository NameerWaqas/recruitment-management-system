import React from "react";
import Header from "../../components/header/Header";
import ReactTypingEffect from "react-typing-effect";
import Grid from "@material-ui/core/Grid";

import AuthContent from "../auth/Auth";
import "./styles/home.css";

function Home() {
  return (
    <div id="container">
      <Header />
      <Grid container>
        <Grid md={7} id="contentSection">
          <h1 style={{ fontWeight: "bold" }}>Do you want </h1>{" "}
          <ReactTypingEffect
            text={[
              "to get hired!",
              "to hire!",
              "make a switch!",
              "to choose a new career!",
            ]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            eraseDelay={2000}
            eraseSpeed={50}
            typingDelay={10}
            speed={100}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        style={{ fontSize: "80%", margin: 0, padding: 0 }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
          <p>then just sign in and let's get started</p>
        </Grid>
        <Grid md={5} id="authSection">
          {" "}
          <AuthContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
