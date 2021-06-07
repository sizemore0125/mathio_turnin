import React from "react";
import StudentCanvas from "./studentCanvas";
import ShapeProblem from "./shapeProblem";
import ClockProblem from "./clockProblem";

const StudentProblem = ({ match, history }) => {
  switch (match.params.type) {
    case "1":
      return <StudentCanvas match={match} history={history} />;
    case "2":
      return <ShapeProblem match={match} history={history} />;
    case "3":
      return <ClockProblem match={match} history={history} />;
    default:
      return <StudentCanvas match={match} history={history} />;
  }
};

export default StudentProblem;
