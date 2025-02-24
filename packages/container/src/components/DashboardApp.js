import React from "react";
import { mount } from "dashboard/DashboardApp";
import { useEffect, useRef } from "react";

export default function DashboardApp() {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
}
