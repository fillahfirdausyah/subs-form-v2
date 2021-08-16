import React from "react";

function Radio({ label, name, value, id }) {
  return (
    <div className="form-check">
      <input
        type="radio"
        className="form-check-input"
        id={id}
        value={value}
        name={name}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
}

export default Radio;
