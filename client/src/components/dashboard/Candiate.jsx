import React from "react";
import { Card, CardHeader } from "reactstrap";
import Drawer from "./Drawer/Drawer";

function Candidate() {
  return (
    <Drawer>
      <Card className="bg-white">
        <CardHeader>
          <h4 className="my-0 py-0">Welcome back!</h4>
        </CardHeader>
      </Card>
    </Drawer>
  );
}
export default Candidate;
