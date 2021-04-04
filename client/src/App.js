import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components import
import Home from "./components/home/Home";

// Utility component
import ThemeColor from "./utilities/ColorHelper";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <ThemeColor>
        <Switch>
          <Route component={Home} exact path="/" />
          {/* <Route component={} path="/auth/login" /> */}
          {/* <Route component={} path="/auth/signup" /> */}
        </Switch>
      </ThemeColor>
    </Router>
  );
}

export default App;
