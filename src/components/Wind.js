import React from "react";
import styled, { keyframes } from "styled-components";

export default function Wind({ handleWindButtonClick }) {
  return (
    <WindButton onClick={handleWindButtonClick}>
      <WindImage src="/images/typhoon.png" alt="wind" />
    </WindButton>
  );
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotate720 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
`;

const WindButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: #4049f9;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(9, 8, 57, 0.2);
  transition: box-shadow 0.3s ease-in-out;
`;

const WindImage = styled.img`
  width: 90%;
  animation: ${rotate360} 2s linear infinite;
  &:hover {
    animation: ${rotate720} 1s linear infinite;
  }
`;
