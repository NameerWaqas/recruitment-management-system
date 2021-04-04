import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";

// Components import
import Header from "./components/header/Header";
import Home from "./components/home/Home";

// Utility component
import ThemeColor from "./utilities/ColorHelper";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <ThemeColor>
        <Header />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Auth} path="/auth" />
        </Switch>
      </ThemeColor>
    </Router>
  );
}

export default App;
