import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/Login";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={() => <p>Hola mundo</p>} />
    </Switch>
  );
}

export default App;
