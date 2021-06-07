import React from "react";
import "react-toastify/dist/ReactToastify.css";

const Input = ({ name, label, error, errorClassName, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} />
      <div
        style={{ visibility: error ? "visible" : "hidden" }}
        className={errorClassName}
      >
        {error}
      </div>
    </div>
  );
};

export default Input;
