import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
