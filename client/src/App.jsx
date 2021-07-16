import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./container/auth/Auth";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";

// Components import
import Home from "./container/home/Home";

// Utility component
import ThemeColor from "./utilities/ColorHelper";
import Dashboard from "./container/dashboard/Dashboard";
import { attachToken } from "./fetcher/fetch";

// Create a client
const queryClient = new QueryClient();
function App() {
  const token = localStorage.getItem("jwt");
  if (token) {
    attachToken(token);
  }
  return (
    <Router>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <ThemeColor>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Auth} path="/auth" />
              <Route component={Dashboard} path="/dashboard/user" />
            </Switch>
          </ThemeColor>
        </QueryClientProvider>
      </ReduxProvider>
    </Router>
  );
}

export default App;
