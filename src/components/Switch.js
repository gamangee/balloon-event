import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import { useMode } from "../context/ModeContext";

export default function Switch() {
  const { isDarkMode, toggleMode } = useMode();
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "isdarkmode"}>
      <SwitchButton>
        <SwitchInput
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleMode}
        />
        <OnAndOff isdarkmode={isDarkMode} />
      </SwitchButton>
    </StyleSheetManager>
  );
}

const SwitchButton = styled.label`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 55px;
  height: 30px;
`;

const OnAndOff = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: #4962cf;
  box-shadow: inset 1px 5px 1px #1e3698;
  transition: 0.4s;
  cursor: pointer;

  &::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 20px;
    background-image: ${(props) =>
      props.isdarkmode ? "url('/images/moon.png')" : "url('/images/sun.png')"};
    background-size: cover;
    background-position: center;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${OnAndOff} {
    background-color: #f2d522;
    box-shadow: inset 1px 5px 1px #e3ae56;
  }

  &:checked + ${OnAndOff}::before {
    transform: translateX(26px);
  }
`;
