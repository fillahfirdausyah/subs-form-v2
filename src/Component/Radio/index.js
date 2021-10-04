import React from "react";

function Radio({ label, name, value, id, onChange, required }) {
  return (
    <div className="form-check">
      <input
        required={required && true}
        type="radio"
        className="form-check-input"
        id={id}
        value={value}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
}

export default Radio;
