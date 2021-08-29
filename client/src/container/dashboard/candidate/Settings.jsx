import React from "react";
import { useSelector } from "react-redux";

function Settings() {
  const { userData } = useSelector((state) => state?.auth);
  const { username, type, email } = userData || "";
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0B18",
        color: "white",
        paddingTop: "10vh",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "10px",
          border: "1px solid white",
          marginLeft: "10px",
          marginRight: "10px",
          borderRadius: "10px",
          alignItems: "center",
          margin: "10px",
          marginTop: 0,
        }}
      >
        <h3 style={{ margin: 0, padding: 0 }}>Username:</h3>
        <h4 style={{ margin: 0, marginTop: "3px", padding: 0 }}>{username}</h4>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          padding: "10px",
          border: "1px solid white",
          marginLeft: "10px",
          marginRight: "10px",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, padding: 0 }}>Email:</h3>
        <h4 style={{ margin: 0, marginTop: "3px", padding: 0 }}>{email}</h4>
      </div>
      <div
        style={{
          display: "flex",
          padding: "10px",
          border: "1px solid white",
          marginLeft: "10px",
          marginRight: "10px",
          margin: "10px",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, padding: 0 }}>Type:</h3>
        <h4 style={{ margin: 0, marginTop: "3px", padding: 0 }}>{type}</h4>
      </div>
    </div>
  );
}
export default Settings;
