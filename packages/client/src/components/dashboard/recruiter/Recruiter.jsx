import React from "react";
import Drawer from "../drawer/Drawer";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Outbox from "./Outbox";
import Settings from "./Settings";
import NewOpening from "./OpenigsTab/NewOpening";

function Recruiter() {
  return (
    <Drawer>
      <Switch>
        <Route exact path="/dashboard/user/" component={Home} />
        <Route path="/dashboard/user/message-box" component={Outbox} />
        <Route path="/dashboard/user/settings" component={Settings} />
        <Route path="/dashboard/user/new-opening/" component={NewOpening} />
      </Switch>
    </Drawer>
  );
}
export default Recruiter;
