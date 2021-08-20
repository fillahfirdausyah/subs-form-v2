import React from "react";

function CheckBox({ id, value, label, name, checked, onChange }) {
  return (
    <div className="form-check">
      <input
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

function CheckboxTemplate({ id, value, name, onChange, checked, label }) {
  return (
    <>
      <input
        required
        type="checkbox"
        className="form-check-input"
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        checked={checked && true}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </>
  );
}

export default CheckBox;

export { CheckboxTemplate };
