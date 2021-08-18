import React from "react";

function CheckBox({ id, value, label, name }) {
  return (
    <div className="form-check">
      <input
        type="checkbox"
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

export default CheckBox;
