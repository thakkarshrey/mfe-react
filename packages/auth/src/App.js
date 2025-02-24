import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

export default ({ history, onSignIn }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signin">
            <SignIn onSignIn={onSignIn} />
          </Route>
          <Route exact path="/auth/signup">
            <SignUp onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
