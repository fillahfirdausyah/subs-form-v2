import React from "react";

import { useAnimate } from "../../Helpers/Context/Animate";

// Asset
import "./style.css";

function BackdropEdit({ children }) {
  const { backdropEdit } = useAnimate();

  return <div className={`backdrop-edit ${backdropEdit}`}>{children}</div>;
}

export default BackdropEdit;
