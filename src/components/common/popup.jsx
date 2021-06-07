import React from "react";
import styled from "styled-components";

const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlackSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const SubmissionContainer = styled.div`
  position: relative;
  background: #fff;
  max-height: 100%;
  padding: 25px;
  z-index: 2;
`;

const Button = styled.span`
  position: absolute;
  right: -50px;
  width: 50px;
  height: 50px;
  font-weight: 600;
  color: #fff;
  font-size: 22px;
  padding: 0 0 0 0;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }

  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const CloseButton = styled(Button)`
  top: 0;
  background: #e05263;
`;

const ConfirmButton = styled(Button)`
  top: 50px;
  background: #0aa286;
`;

const ContentSection = styled.div`
  min-height: 100px;
  max-height: 70vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(233, 232, 232);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.375rem;
    background: #a0a0a0;
    border-right: 0.25rem rgb(233, 232, 232) solid;
    border-left: 0.25rem rgb(233, 232, 232) solid;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #6d6d6d;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #3f3f3f;
  }

  & > h2 {
    margin: 0;
    padding: 5px 0 15px 0;
  }

  & > p {
    font-size: 17px;
    margin: 0;
  }
`;

const HeadBlock = styled.div`
  display: grid;
  grid-template-columns: 20% 100fr;
`;

const PopUp = (props) => {
  const { heading, body, onClose, showConfirm, onConfirm } = props;
  return (
    <PopUpContainer>
      <BlackSection onClick={onClose}></BlackSection>
      <SubmissionContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        {showConfirm ? (
          <ConfirmButton onClick={onConfirm}>{renderCheckIcon()}</ConfirmButton>
        ) : null}
        <ContentSection>
          <HeadBlock>{heading}</HeadBlock>
          <div id="body-block">{body}</div>
        </ContentSection>
      </SubmissionContainer>
    </PopUpContainer>
  );
};

const renderCheckIcon = () => {
  return (
    <svg
      style={{ fill: "white", margin: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="30"
      height="30"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
    </svg>
  );
};

export default PopUp;
