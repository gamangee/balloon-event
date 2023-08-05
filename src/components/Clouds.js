import React from "react";
import styled, { keyframes } from "styled-components";
import { Cloud } from "../assets/cloud";
import { v4 as id } from "uuid";

export default function Clouds() {
  return (
    <Container>
      {cloudsProperty.map((cloudProperty) => (
        <CloudImage key={id()} {...cloudProperty}>
          <Cloud width={cloudProperty.width} height={cloudProperty.height} />
        </CloudImage>
      ))}
    </Container>
  );
}

const cloudsProperty = [
  {
    top: "90%",
    left: "15%",
    deg: "10deg",
    blur: "0",
    width: "270px",
    height: "150px",
    animationduration: "3s",
  },
  {
    id: 1,
    top: "70%",
    left: "3%",
    deg: "-5deg",
    blur: "0.5px",
    width: "180px",
    height: "120px",
    animationduration: "5s",
  },
  {
    top: "50%",
    left: "25%",
    deg: "6deg",
    blur: "1px",
    width: "160px",
    height: "130px",
    animationduration: "4s",
  },
  {
    top: "80%",
    left: "70%",
    deg: "-3deg",
    blur: "1.5px",
    width: "350px",
    height: "250px",
    animationduration: "3s",
  },
  {
    id: 4,
    top: "55%",
    left: "68%",
    deg: "-5deg",
    blur: "2px",
    width: "260px",
    height: "120px",
    animationduration: "5s",
  },
  {
    top: "30%",
    left: "60%",
    deg: "3deg",
    blur: "2.5px",
    width: "190px",
    height: "80px",
    animationduration: "4s",
  },
  {
    top: "20%",
    left: "20%",
    deg: "6deg",
    blur: "3px",
    width: "160px",
    height: "80px",
    animationduration: "3s",
  },
  {
    top: "15%",
    left: "80%",
    deg: "-3deg",
    blur: "3.5px",
    width: "90px",
    height: "140px",
    animationduration: "6s",
  },
  {
    top: "6%",
    left: "55%",
    deg: "5deg",
    blur: "4px",
    width: "100px",
    height: "120px",
    animationduration: "5s",
  },
  {
    id: 9,
    top: "1%",
    left: "10%",
    deg: "4deg",
    blur: "4.5px",
    width: "70px",
    height: "120px",
    animationduration: "4s",
  },
];

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translate(6px, 3px); 
  }
  50% {
    transform: translate(0px, 0px); 
  }

`;

// styled-components의 StyleSheetManager를 사용하여 shouldForwardProp 옵션 설정
// 이 옵션을 통해 원하는 속성들만 DOM 요소로 전달되도록 필터링할 수 있습니다.
const CloudImage = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["top", "left", "deg", "blur", "animationduration"].includes(prop),
})`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.deg});
  filter: blur(${(props) => props.blur});
  animation: ${floatingAnimation} ${(props) => props.animationduration}
    ease-in-out infinite alternate;
`;
