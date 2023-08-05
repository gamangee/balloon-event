import React from "react";
import styled, { keyframes } from "styled-components";
import { v4 as id } from "uuid";

export default function OriginBallons() {
  return (
    <>
      {balloons?.map((balloon, index) => (
        <BalloonShape
          key={id()}
          top={balloon.top}
          left={balloon.left}
          deg={balloon.deg}
        >
          <Balloon
            color={balloon.color}
            gradient={balloon.gradient}
            shadow={balloon.shadow}
            size={balloon.size}
            index={index}
          />
        </BalloonShape>
      ))}
    </>
  );
}

const balloons = [
  {
    color: "#ffd107",
    gradient: "linear-gradient(135deg, #ffffc1, #ffff00)",
    shadow: "#ffd103",
    size: "110",
    top: "38%",
    left: "32vw",
    deg: "-26deg",
  },
  {
    color: "#62ff07",
    gradient: "linear-gradient(155deg, #eeffe4, #62ff07)",
    shadow: "#62ff07",
    size: "90",
    top: "45%",
    left: "35vw",
    deg: "-30deg",
  },
  {
    color: "#00d0ff",
    gradient: "linear-gradient(95deg, #c4f7ff, #00d0ff)",
    shadow: "#00d0ff",
    size: "110",
    top: "20%",
    left: "36vw",
    deg: "-15deg",
  },
  {
    color: "#ff5752",
    gradient: "linear-gradient(125deg, #ffc7c0, #ff5752)",
    shadow: "#ff5752",
    size: "100",
    top: "20%",
    left: "42vw",
    deg: "-5deg",
  },
  {
    color: "#f399ff",
    gradient: "linear-gradient(110deg, #fbe2ff, #f399ff)",
    shadow: "#f399ff",
    size: "90",
    top: "35%",
    left: "40vw",
    deg: "-10deg",
  },
  {
    color: "#9881ff",
    gradient: "linear-gradient(110deg, #e9e4ff, #9881ff)",
    shadow: "#9881ff",
    size: "100",
    top: "28%",
    left: "46vw",
    deg: "7deg",
  },
  {
    color: "#ffd107",
    gradient: "linear-gradient(135deg, #ffffc1, #ffff00)",
    shadow: "#ffd103",
    size: "70",
    top: "42%",
    left: "48vw",
    deg: "8deg",
  },
  {
    color: "#00dc25",
    gradient: "linear-gradient(125deg, #cfffcf, #00dc25)",
    shadow: "#00dc25",
    size: "130",
    top: "20%",
    left: "55vw",
    deg: "16deg",
  },
  {
    color: "#ff6e07",
    gradient: "linear-gradient(155deg, #ffe0c9, #ff6e07)",
    shadow: "#ff6e07",
    size: "110",
    top: "29%",
    left: "53vw",
    deg: "15deg",
  },
  {
    color: "#ff99e7",
    gradient: "linear-gradient(110deg, #ffe2f8, #ff99e7)",
    shadow: "#ff99e7",
    size: "100",
    top: "32%",
    left: "60vw",
    deg: "30deg",
  },
  {
    color: "#1a85ff",
    gradient: "linear-gradient(95deg, #afd4ff, #1a85ff)",
    shadow: "#1a85ff",
    size: "80",
    top: "46%",
    left: "58vw",
    deg: "24deg",
  },
  {
    color: "#45fff3",
    gradient: "linear-gradient(90deg, #ddfffd, #45fff3)",
    shadow: "#45fff3",
    size: "100",
    top: "45%",
    left: "62vw",
    deg: "30deg",
  },
];

const balloonRightMovement = keyframes`
  0%,100% {
    transform: translate(4px,2px);
  }
  50% {
    transform: translate(0,0);
  }
`;

const balloonLeftMovement = keyframes`
  0%,100% {
    transform: translate(-4px,2px);
  }
  50% {
    transform: translate(0,0);
  }
`;

const BalloonShape = styled.div.withConfig({
  shouldForwardProp: (prop) => !["top", "left", "deg"].includes(prop),
})`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.deg});
`;

const Balloon = styled.div.withConfig({
  shouldForwardProp: (prop) => !["top", "left", "deg"].includes(prop),
})`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: ${(props) => props.size + "px"};
  height: ${(props) => +props.size * 1.1 + "px"};
  background: ${(props) => props.gradient};
  box-shadow: inset 5px 5px 10px ${(props) => props.shadow};
  border-radius: 50%;
  animation: ${(props) =>
      props.index < 7 ? balloonRightMovement : balloonLeftMovement}
    2s infinite;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 6px solid ${(props) => props.color};
    transform: translate(-50%);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -${(props) => +props.size * 1.1 + 120 + "px"};
    left: 50%;
    width: 1px;
    height: ${(props) => +props.size * 1.1 + 120 + "px"};
    background-color: #222;
    transform: translate(-50%);
  }
`;
