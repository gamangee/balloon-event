import React from "react";
import styled from "styled-components";

export default function Background() {
  return (
    <Container>
      <HouseImage src="/images/home.png"></HouseImage>
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

const HouseImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 50vh;
  cursor: pointer;
  z-index: 10;
`;
