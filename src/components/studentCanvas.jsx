import React, { useEffect, useState } from "react";
import "../styles/studentProblem.css";
import CanvasDraw from "react-canvas-draw";
import CanvasToolBar from "./canvasToolBar";
import axios from "axios";

const StudentCanvas = ({ match, history }) => {
  const [height, width] = useWindowSize();
  const [canvasColor, setBrush] = useState("#444");
  const [brush, setThick] = useState(3);
  const [mute, setMute] = useState(false);
  const [qtext, setQText] = useState("None");

  useEffect(async () => {
    window.scrollTo(0, 0);
    const problems = await axios.get("http://localhost:3001/create");
    const thisProblem = problems.data.find(
      (problem) => problem._id === match.params.id
    );
    setQText(thisProblem.qtext);
  }, []);

  let canvas = React.createRef();
  return (
    <React.Fragment>
      <div className="heading">
        <h2 className="probTitle">{match.params.title}</h2>
        <CanvasToolBar
          canvas={canvas}
          setThick={setThick}
          setBrush={setBrush}
          setMute={setMute}
          mute={mute}
        />
        <button
          className="submit"
          type="submit"
          onClick={() => {
            handleSubmit(history, match, canvas);
          }}
        >
          Submit
        </button>
      </div>

      <CanvasDraw
        className="canvas"
        ref={canvas}
        canvasWidth={width - 16}
        canvasHeight={height * 6}
        brushColor={canvasColor}
        lazyRadius={1.5}
        brushRadius={brush}
        hideGrid={true}
        disabled={mute}
      />
      <div className="problemBody">
        <p>{qtext}</p>
      </div>
    </React.Fragment>
  );
};

const handleSubmit = async (history, match, canvas) => {
  const problems = await axios.get("http://localhost:3001/create");
  let thisProblem = problems.data.find(
    (problem) => problem._id === match.params.id
  );

  thisProblem.complete = true;
  thisProblem.answer = canvas.current.getSaveData();

  window.location.href = "http://localhost:3000/problemselect";

  await axios.put(
    `http://localhost:3001/create/${match.params.id}`,
    thisProblem
  );
};

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  const handleResize = () => {
    setSize([window.innerHeight, window.innerWidth]);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export default StudentCanvas;
