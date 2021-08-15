import React from "react";

import { useAnimate } from "../../Helpers/Context/Animate";

// Asset
import "./style.css";

function Backdrop({ children }) {
  const { backdrop } = useAnimate();

  return <div className={`backdrop ${backdrop}`}>{children}</div>;
}

export default Backdrop;
