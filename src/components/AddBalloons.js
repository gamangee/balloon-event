import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const balloonVariants = (left) => {
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
    flyAway: { y: "-100vh", transition: { duration: 20 } },
  };
};

export default function AddBalloons({
  removeBalloon,
  setBalloons,
  balloons,
  setHouseFloating,
}) {
  const [windBlowing, setWindBlowing] = useState(false);

  const handleRemoveBallonClick = (id) => {
    setBalloons((prevBalloons) =>
      prevBalloons.map((balloon) =>
        balloon.id === id ? { ...balloon, popped: true } : balloon
      )
    );
    setTimeout(() => {
      removeBalloon(id);
    }, 100);
  };

  const handleWindButtonClick = () => {
    setWindBlowing(true);
    if (balloons.length >= 15) {
      setHouseFloating(true);
    }
    setTimeout(() => {
      setWindBlowing(false);
      setBalloons([]);
    }, 20000);
  };

  return (
    <>
      <WindButton onClick={handleWindButtonClick}>Blow Wind</WindButton>
      <AnimatePresence>
        {balloons?.map((balloon) => (
          <BalloonShape
            key={balloon.id}
            top={balloon.top}
            left={balloon.left}
            deg={balloon.deg}
          >
            <Balloon
              color={balloon.color}
              gradient={balloon.gradient}
              size={balloon.size}
              onClick={() => handleRemoveBallonClick(balloon.id)}
              popped={balloon.popped.toString()}
              variants={balloonVariants(balloon.left)}
              initial="hidden"
              animate={windBlowing ? "flyAway" : "visible"}
              exit="exit"
            />
          </BalloonShape>
        ))}
      </AnimatePresence>
    </>
  );
}

const BalloonShape = styled.div.withConfig({
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
  width: ${(props) => props.size + "px"};
  height: ${(props) => +props.size * 1.1 + "px"};
  background: ${(props) => props.gradient};
  box-shadow: inset 5px 5px 10px ${(props) => props.color};
  border-radius: 50%;
  transform: rotate(${(props) => props.rotation});
  cursor: pointer;

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
`;

const WindButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
`;
