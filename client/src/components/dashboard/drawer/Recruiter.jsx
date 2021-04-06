import React from "react";
import Paper from "@material-ui/core/Paper";
import Drawer from "./Drawer";
import { useSelector } from "react-redux";

function Recruiter() {
  const { userData } = useSelector((state) => state.auth);
  return (
    <Drawer>
      <Paper className="p-3">
        <h4 className="mb-0 pb-0">
          Welcome back! <b>{userData.username}</b>
        </h4>
      </Paper>
    </Drawer>
  );
}
export default Recruiter;
