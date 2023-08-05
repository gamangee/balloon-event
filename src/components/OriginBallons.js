import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const originBallonVariants = (left) => {
  const leftPercentage = parseFloat(left.split("v")[0]);
  const moveDirection = leftPercentage < 50 ? 4 : -4;
  return {
    hidden: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
    },
    visible: {
      scale: 1.5,
      opacity: 1,
      x: [moveDirection + "px", 0 + "px", moveDirection + "px"],
      y: "2px",
      transition: {
        x: { repeat: Infinity, duration: 2 },
        type: "spring",
        bounce: 0.3,
      },
    },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.2 }, x: 0, y: 0 },
    flyAway: { y: "-100vh", transition: { duration: 2 } },
  };
};

export default function OriginBallons({ windBlowing, originBalloons }) {
  return (
    <>
      {originBalloons?.map((balloon, index) => (
        <BalloonShape
          key={balloon.id}
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
            variants={originBallonVariants(balloon.left)}
            initial="hidden"
            animate={windBlowing ? "flyAway" : "visible"}
            exit="exit"
          />
        </BalloonShape>
      ))}
    </>
  );
}

const BalloonShape = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !["top", "left", "deg"].includes(prop),
})`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.deg});
`;

const Balloon = styled(motion.div).withConfig({
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
    background-color: #272730;
    transform: translate(-50%);
  }
`;
