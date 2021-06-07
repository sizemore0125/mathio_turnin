import React from "react";
import PopUp from "../common/popup";
import CanvasDraw from "react-canvas-draw";

const ProblemPreview = ({ qname, qtext, onClose, showConfirm, onConfirm }) => {
  const heading = <h2 className="stu-sub-title">{qname}</h2>;
  const body = (
    <React.Fragment>
      <div className="prev-problem-body">
        <p>{qtext}</p>
      </div>
      <CanvasDraw
        className="student-submission"
        brushColor={"white"}
        hideGrid={true}
        disabled={true}
        hideInterface={true}
        canvasWidth={1023}
        canvasHeight={3546}
        lazyRadius={0}
        brushRadius={0}
      />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <PopUp
        heading={heading}
        body={body}
        onClose={onClose}
        showConfirm={showConfirm}
        onConfirm={onConfirm}
      />
    </React.Fragment>
  );
};

export default ProblemPreview;
