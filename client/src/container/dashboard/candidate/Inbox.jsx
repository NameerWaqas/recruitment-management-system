import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./styles/inbox.css";

const Message = ({ details = {}, setShowMessage }) => {
  const { companyName = "VentureDive" } = details || "";
  return (
    <Grid
      container
      style={{ overflow: "hidden" }}
      onClick={() => setShowMessage(details)}
    >
      <Grid
        sm={12}
        md={12}
        style={{
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #343a40",
          alignItems: "center",
          overflow: "hidden",
        }}
        className="message"
      >
        <p style={{ margin: 0, fontWeight: "bolder", fontSize: "130%" }}>
          {companyName}
        </p>
        <p
          style={{
            padding: 0,
            margin: 0,
            marginLeft: "10px",
            height: "1.3em",
            overflow: "hidden",
            marginBottom: "2px",
          }}
        >
          <b>Congratulations! </b> you've successfully cleared the first round
          and here's the link for your technical test, make sure to ping us back
          when you're done with it. Cheers
        </p>
      </Grid>
    </Grid>
  );
};

const MessageDetails = ({ details, setShowMessage }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        minHeight: "70vh",
        borderRadius: "10px",
        border: "1px solid white",
        backgroundColor: "white",
        color: "inherit",
      }}
    >
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>VentureDive</h4>
        <button
          style={{ border: "none", backgroundColor: "white" }}
          onClick={() => setShowMessage(null)}
        >
          <b>X</b>
        </button>
      </section>
      <section>
        <p>
          <b>Congratulations! </b> you've successfully cleared the first round
          and here's the link for your technical test, make sure to ping us back
          when you're done with it. Cheers
        </p>
      </section>
    </div>
  );
};

function Outbox() {
  const [showMessage, setShowMessage] = useState(null);
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0B18",
        paddingTop: "10px",
      }}
    >
      {showMessage === null ? (
        <Message setShowMessage={setShowMessage} />
      ) : (
        <MessageDetails setShowMessage={setShowMessage} />
      )}
    </div>
  );
}
4;
export default Outbox;
