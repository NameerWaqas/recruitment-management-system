import React from "react";
import Drawer from "../drawer/Drawer";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Inbox from "./Inbox";
import Settings from "./Settings";
import PreQuiz from "./preQuiz";
import QuizSection from "./Quiz";

function Candidate() {
  return (
    <Drawer>
      <Switch>
        <Route exact path="/dashboard/user/" component={Home} />
        <Route path="/dashboard/user/message-box/" component={Inbox} />
        <Route path="/dashboard/user/settings/" component={Settings} />
        <Route path="/dashboard/user/quiz/:id" component={PreQuiz} />
        <Route path="/dashboard/user/quiz-start/:id" component={QuizSection} />
      </Switch>
    </Drawer>
  );
}
export default Candidate;
