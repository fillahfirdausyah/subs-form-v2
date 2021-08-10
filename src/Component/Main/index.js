import React from "react";

// Asset
import "./style.css";

function Main(props) {
  return (
    <div className="main">
      <div className="main-info">
        <h4>{props.title}</h4>
        <div className="main-wrapper">{props.children}</div>
      </div>
    </div>
  );
}

export default Main;
