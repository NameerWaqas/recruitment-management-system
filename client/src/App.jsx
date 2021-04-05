import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";

// Components import
import Header from "./components/header/Header";
import Home from "./components/home/Home";

// Utility component
import ThemeColor from "./utilities/ColorHelper";

// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
