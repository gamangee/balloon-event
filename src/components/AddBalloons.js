import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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
    flyAway: { y: "-100vh", transition: { duration: 2 } },
  };
};

export default function AddBalloons({ removeBalloon, balloons, windBlowing }) {
  const handleRemoveBallonClick = (id) => {
    setTimeout(() => {
      removeBalloon(id);
    }, 100);
  };

  useEffect(() => {
    document.body.style.overflow = windBlowing ? "hidden" : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [windBlowing]);

  return (
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
            variants={balloonVariants(balloon.left)}
            initial="hidden"
            animate={windBlowing ? "flyAway" : "visible"}
            exit="exit"
          />
        </BalloonShape>
      ))}
    </AnimatePresence>
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
