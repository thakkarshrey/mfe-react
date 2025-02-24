import React from "react";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath], // by default if we open any route suppose '/pricing' then memory router only knows that the default route is "/" so we need to explicitly define this
    });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate: function ({ pathname: prevPathname }) {
      if (history.location.patname !== prevPathname) history.push(prevPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#_auth-dev-root");
  if (element)
    mount(element, {
      defaultHistory: createBrowserHistory(),
    });
}

export { mount };
