import React from "react";
import Card from "@material-ui/core/Card";
import { useDispatch } from "react-redux";
import { toggleSubmit } from "../../../../redux/reducers/newOpening";
import Button from "@material-ui/core/Button";

function End() {
  const dispatch = useDispatch();
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
        <Button
          onClick={() => dispatch(toggleSubmit())}
          style={{ backgroundColor: "#023047", color: "white" }}
        >
          Submit Job
        </Button>
      </h4>
    </Card>
  );
}

export default End;
