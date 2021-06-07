import React from "react";
import circles from "../../images/Circles.PNG";
import clock from "../../images/Clock.PNG";
import styled, { css } from "styled-components";
import ReactTooltip from "react-tooltip";

const TypeSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100fr;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 30%;
  height: 150px;
  overflow: hidden;
  border-radius: 4px;
  background: #e2e2e2;
  flex-direction: row;
  justify-content: center;
  transition: box-shadow 0.15s, transform 0.5s ease-in-out;
  ${(props) =>
    props.active &&
    css`
      box-shadow: 0 0 0 5px #3185fc4b;
      transform: scale(1.02);
      cursor: pointer;
    `}

  &:hover {
    box-shadow: 0 0 0 5px rgba(10, 162, 134, 0.25);
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const SelectImage = styled.img`
  position: relative;
  height: 100%;
`;

const TypeSelect = (props) => {
  return (
    <TypeSelectContainer>
      <ImageContainer
        data-tip
        data-for="canvas"
        active={props.selected === 1}
        onClick={() => {
          props.onSelect(1);
        }}
      >
        {renderDrawIcon()}
      </ImageContainer>
      <ReactTooltip id="canvas" type="dark" effect="solid" place="bottom">
        <span>Canvas</span>
      </ReactTooltip>
      <ImageContainer
        data-tip
        data-for="cirlces"
        active={props.selected === 2}
        onClick={() => {
          props.onSelect(2);
        }}
      >
        <SelectImage src={circles}></SelectImage>
      </ImageContainer>
      <ReactTooltip id="cirlces" type="dark" effect="solid" place="bottom">
        <span>Fraction Circles</span>
      </ReactTooltip>
      <ImageContainer
        data-tip
        data-for="clock"
        active={props.selected === 3}
        onClick={() => {
          props.onSelect(3);
        }}
      >
        <SelectImage src={clock}></SelectImage>
      </ImageContainer>
      <ReactTooltip id="clock" type="dark" effect="solid" place="bottom">
        <span>Clock</span>
      </ReactTooltip>
    </TypeSelectContainer>
  );
};

const renderDrawIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="150"
      height="150"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
    </svg>
  );
};

export default TypeSelect;
