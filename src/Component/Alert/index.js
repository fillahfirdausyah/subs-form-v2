import React from "react";
import "./style.css";

function AlertSuccess({ message, visibility }) {
  return (
    <>
      <div className={`alert ${visibility}`}>
        <div className="success"></div>
        <div className="alert-msg">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}

function AlertDanger({ message, visibility }) {
  return (
    <>
      <div className={`alert ${visibility}`}>
        <div className="danger"></div>
        <div className="alert-msg">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}

export { AlertSuccess, AlertDanger };
