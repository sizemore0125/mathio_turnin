import React, { Component } from "react";
import clock from "../images/Clock.PNG";
import circles from "../images/Circles.PNG";

class ProblemPannel extends Component {
  renderProblemImage = () => {
    switch (this.props.problem.qtype) {
      case "1":
        return this.renderDrawIcon();
      case "2":
        return <img src={circles}></img>;
      case "3":
        return <img src={clock}></img>;
      default:
        return null;
    }
  };

  renderDrawIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="250"
        height="250"
        style={{ fill: "#39a78c61" }}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
      </svg>
    );
  };

  render() {
    const { problem } = this.props;
    return (
      <div className="panel">
        <div className="panelHeader">
          <div className="headerElement">
            <h1 className="problemTitle">{problem.qname}</h1>
          </div>
          <div className="headerElement">
            <svg
              className="checkIcon"
              visibility={!problem.complete === true ? "hidden" : "visible"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </svg>
          </div>
        </div>
        <div className="problemPreview">{this.renderProblemImage()}</div>
      </div>
    );
  }
}

export default ProblemPannel;
