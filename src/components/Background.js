import React from "react";
import styled from "styled-components";
import Clouds from "./Clouds";
import { motion } from "framer-motion";

const houseVariants = {
  initial: { x: "-50%", y: "0" },
  flyAway: { y: "-100vh", transition: { duration: 40 } },
};

export default function Background({ handleHouseClick, houseFloating }) {
  return (
    <Container>
      <Clouds />
      <HouseImage
        onClick={handleHouseClick}
        src="/images/home.png"
        variants={houseVariants}
        initial="initial"
        animate={houseFloating ? "flyAway" : "initial"}
      ></HouseImage>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.skyblueTop}, ${theme.colors.skyblueBottom})`};
`;

const HouseImage = styled(motion.img)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 50vh;
  cursor: pointer;
  z-index: 10;
`;
