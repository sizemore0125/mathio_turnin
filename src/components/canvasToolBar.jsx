import React, { Component } from "react";
import CanvasToolBarButton from "./canvasToolBarButton";

class CanvasToolBar extends Component {
  render() {
    const { canvas, setThick, setBrush, setMute, mute } = this.props;

    return (
      <div className="toolBar">
        <CanvasToolBarButton
          id={mute ? "draw tbutton activetbutton" : "draw tbutton"}
          label="Mute Canvas"
          onClick={() => {
            mute ? setMute(false) : setMute(true);
          }}
          icon={this.renderDrawIcon()}
        />
        <input
          type="color"
          onChange={(event) => {
            setBrush(event.target.value);
          }}
        />
        <input
          type="range"
          min="1"
          max="10"
          className="slider"
          onChange={(event) => {
            setThick(event.target.value);
          }}
        />
        <CanvasToolBarButton
          id="undo"
          label="Undo"
          onClick={() => {
            canvas.current.undo();
          }}
          icon={this.renderUndoIcon()}
        />
        <CanvasToolBarButton
          id="clear"
          label="Clear Canvas"
          onClick={() => {
            canvas.current.clear();
          }}
          icon={this.renderTrashIcon()}
        />
      </div>
    );
  }

  renderTrashIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
      </svg>
    );
  }

  renderUndoIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />
      </svg>
    );
  }

  renderDrawIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
      </svg>
    );
  }
}

export default CanvasToolBar;
