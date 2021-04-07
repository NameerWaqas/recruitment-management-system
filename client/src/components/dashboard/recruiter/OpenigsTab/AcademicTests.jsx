import React from "react";
import Card from "@material-ui/core/Card";

function AcademicTest() {
  return (
    <Card
      className="p-3"
      style={{
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h4 className="mb-0 pb-0">
        <b>Academic Details</b>
      </h4>
    </Card>
  );
}

export default AcademicTest;
