import React from "react";
import ReactTooltip from "react-tooltip";

const CanvasToolBarButton = ({ onClick, id, label, icon }) => {
  return (
    <React.Fragment>
      <button
        data-tip
        data-for={id}
        className={id + " tbutton"}
        onClick={onClick}
      >
        {icon}
      </button>
      <ReactTooltip id={id} type="dark" effect="solid" place="bottom">
        <span>{label}</span>
      </ReactTooltip>
    </React.Fragment>
  );
};

export default CanvasToolBarButton;
