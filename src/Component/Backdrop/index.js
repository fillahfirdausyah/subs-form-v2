import React from "react";

import { useAnimate } from "../../Context/Animate";

// Asset
import "./style.css";

function Backdrop() {
  const { backDrop } = useAnimate();
  return <div className={`backdrop ${backDrop}`}></div>;
}

export default Backdrop;
