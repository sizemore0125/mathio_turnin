import React, { Component } from "react";

class TCInput extends Component {
  render(props) {
    const { name, label, error, ...rest } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={name} className="teacher-input-label">
          {label}
        </label>
        <div className="teacher-input-area">
          <input
            {...rest}
            id={name}
            name={name}
            className="teacher-input"
            type="text"
            placeholder={label}
          />
        </div>
        <div
          style={{ visibility: error ? "visible" : "hidden" }}
          className="teacher-error-message"
        >
          {error}
        </div>
      </React.Fragment>
    );
  }
}

export default TCInput;
