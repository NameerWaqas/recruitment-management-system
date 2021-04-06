import React from "react";
import Drawer from "../drawer/Drawer";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Inbox from "./Inbox";
import Settings from "./Settings";

function Candidate() {
  return (
    <Drawer>
      <Switch>
        <Route exact path="/dashboard/user/" component={Home} />
        <Route path="/dashboard/user/inbox/" component={Inbox} />
        <Route path="/dashboard/user/settings/" component={Settings} />
      </Switch>
    </Drawer>
  );
}
export default Candidate;
