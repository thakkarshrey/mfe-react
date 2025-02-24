import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath], // by default if we open any route suppose '/pricing' then memory router only knows that the default route is "/" so we need to explicitly define this
    });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: function ({ pathname: prevPathname }) {
      if (history.location.pathname !== prevPathname)
        history.push(prevPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_marketing-dev-root");
  if (root)
    mount(root, {
      defaultHistory: createBrowserHistory(),
    });
}

export { mount };
