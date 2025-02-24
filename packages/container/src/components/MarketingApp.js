import React from "react";
import { mount } from "marketing/MarketingApp";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname)
          history.push(nextPathname);
      },
      initialPath: history.location.pathname, // adding initial route to the memory router so that it recognizes the default route and updates along with the browser router
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
}
