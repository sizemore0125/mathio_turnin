import React, { Component } from "react";

class TCButton extends Component {
  render() {
    const { onValidate } = this.props;

    const buttonEnabled = onValidate
      ? "submit-button-disabled"
      : "submit-button";
    return (
      <div className="submit-button-container">
        <button className={buttonEnabled} type="submit" disabled={onValidate}>
          <span className="submit-button-span">
            <p className="submit-button-text">Publish</p>
            {this.renderArrow()}
          </span>
        </button>
      </div>
    );
  }

  renderArrow = () => {
    return (
      <svg
        className="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
      </svg>
    );
  };
}

export default TCButton;
