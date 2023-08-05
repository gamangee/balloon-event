import React from "react";
import styled from "styled-components";
import Clouds from "./Clouds";
import { motion } from "framer-motion";

const houseVariants = {
  initial: { x: "0", y: "0" },
  flyAway: { y: "-100vh", transition: { duration: 3 } },
};

export default function Background({ handleHouseClick, houseFloating }) {
  return (
    <Container>
      <Clouds />
      <House>
        <HouseImage
          onClick={handleHouseClick}
          src="/images/home.png"
          variants={houseVariants}
          initial="initial"
          animate={houseFloating ? "flyAway" : "initial"}
        />
      </House>
    </Container>
  );
}

const Container = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.skyblueTop}, ${theme.colors.skyblueBottom})`};
`;

const House = styled.div`
  margin: 0 auto;
  margin-top: -420px;
  display: flex;
  align-items: flex-end;
  width: 320px;
  height: 420px;
`;

const HouseImage = styled(motion.img)`
  width: 100%;
  cursor: pointer;
  z-index: 1;
`;
