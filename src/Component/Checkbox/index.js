import React from "react";

function CheckBox({ id, value, label, name, checked, onChange }) {
  return (
    <div className="form-check">
      <input
        required
        type="checkbox"
        className="form-check-input"
        id={id}
        value={value}
        name={name}
        checked={checked && true}
        onChange={onChange}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
