import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useMode } from "./context/ModeContext";
import { darkTheme, lightTheme } from "./styles/theme";
import Background from "./components/Background";
import OriginBallons from "./components/OriginBallons";
import AddBalloons from "./components/AddBalloons";
import { v4 as id } from "uuid";
import Switch from "./components/Switch";
import {
  getRandomColor,
  getRandomNumber,
  getRandomSize,
} from "./utils/getRandoms";

const originBalloons = [
  {
    id: id(),
    color: "#ffd107",
    gradient: "linear-gradient(135deg, #ffffc1, #ffff00)",
    shadow: "#ffd103",
    size: "90",
    top: "38%",
    left: "32vw",
    deg: "-26deg",
  },
  {
    id: id(),
    color: "#62ff07",
    gradient: "linear-gradient(155deg, #eeffe4, #62ff07)",
    shadow: "#62ff07",
    size: "80",
    top: "45%",
    left: "35vw",
    deg: "-30deg",
  },
  {
    id: id(),
    color: "#00d0ff",
    gradient: "linear-gradient(95deg, #c4f7ff, #00d0ff)",
    shadow: "#00d0ff",
    size: "70",
    top: "20%",
    left: "36vw",
    deg: "-15deg",
  },
  {
    id: id(),
    color: "#ff5752",
    gradient: "linear-gradient(125deg, #ffc7c0, #ff5752)",
    shadow: "#ff5752",
    size: "100",
    top: "20%",
    left: "42vw",
    deg: "-5deg",
  },
  {
    id: id(),
    color: "#f399ff",
    gradient: "linear-gradient(110deg, #fbe2ff, #f399ff)",
    shadow: "#f399ff",
    size: "60",
    top: "35%",
    left: "40vw",
    deg: "-10deg",
  },
  {
    id: id(),
    color: "#9881ff",
    gradient: "linear-gradient(110deg, #e9e4ff, #9881ff)",
    shadow: "#9881ff",
    size: "80",
    top: "28%",
    left: "46vw",
    deg: "7deg",
  },
  {
    id: id(),
    color: "#ffd107",
    gradient: "linear-gradient(135deg, #ffffc1, #ffff00)",
    shadow: "#ffd103",
    size: "70",
    top: "42%",
    left: "48vw",
    deg: "8deg",
  },
  {
    id: id(),
    color: "#00dc25",
    gradient: "linear-gradient(125deg, #cfffcf, #00dc25)",
    shadow: "#00dc25",
    size: "90",
    top: "20%",
    left: "55vw",
    deg: "16deg",
  },
  {
    id: id(),
    color: "#ff6e07",
    gradient: "linear-gradient(155deg, #ffe0c9, #ff6e07)",
    shadow: "#ff6e07",
    size: "80",
    top: "29%",
    left: "53vw",
    deg: "15deg",
  },
  {
    id: id(),
    color: "#ff99e7",
    gradient: "linear-gradient(110deg, #ffe2f8, #ff99e7)",
    shadow: "#ff99e7",
    size: "90",
    top: "32%",
    left: "60vw",
    deg: "30deg",
  },
  {
    id: id(),
    color: "#1a85ff",
    gradient: "linear-gradient(95deg, #afd4ff, #1a85ff)",
    shadow: "#1a85ff",
    size: "80",
    top: "46%",
    left: "58vw",
    deg: "24deg",
  },
  {
    id: id(),
    color: "#45fff3",
    gradient: "linear-gradient(90deg, #ddfffd, #45fff3)",
    shadow: "#45fff3",
    size: "90",
    top: "45%",
    left: "62vw",
    deg: "30deg",
  },
];

export default function App() {
  const { isDarkMode } = useMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [balloons, setBalloons] = useState([]);
  const [houseFloating, setHouseFloating] = useState(false);
  const [windBlowing, setWindBlowing] = useState(false);

  const handleHouseClick = () => {
    addBalloon();
  };

  const addBalloon = () => {
    const originBalloonsPosition = {
      top: 50,
      left: 50,
      width: 5,
      height: 5,
    };

    let randomTop = getRandomNumber(
      originBalloonsPosition.top - 40,
      originBalloonsPosition.top + originBalloonsPosition.height + 20
    );
    let randomLeft = getRandomNumber(
      originBalloonsPosition.left - 40,
      originBalloonsPosition.left + originBalloonsPosition.width + 20
    );

    let randomRotation;
    if (randomLeft <= 50) {
      randomRotation = getRandomNumber(-50, 0);
    } else {
      randomRotation = getRandomNumber(0, 50);
    }

    const { shadow, gradient } = getRandomColor();

    setBalloons((prevBalloons) => {
      return [
        ...prevBalloons,
        {
          id: id(),
          color: shadow,
          gradient: gradient,
          size: getRandomSize(),
          top: `${randomTop}%`,
          left: `${randomLeft}vw`,
          deg: `${randomRotation}deg`,
        },
      ];
    });
  };

  const removeBalloon = (id) => {
    setBalloons((prevBalloons) =>
      prevBalloons.filter((balloon) => balloon.id !== id)
    );
  };

  const handleWindButtonClick = () => {
    setWindBlowing(true);
    if (balloons.length >= 15 && originBalloons) {
      setHouseFloating(true);
    }
    setTimeout(() => {
      setWindBlowing(false);
      setHouseFloating(false);
      setBalloons([]);
    }, 3500);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Background
          handleHouseClick={handleHouseClick}
          houseFloating={houseFloating}
        />
        <AddBalloons
          balloons={balloons}
          removeBalloon={removeBalloon}
          windBlowing={windBlowing}
        />
        <OriginBallons
          originBalloons={originBalloons}
          windBlowing={windBlowing}
        />
        <Switch />
        <WindButton onClick={handleWindButtonClick}>
          <WindImage src="/images/wind.png" alt="wind" />
        </WindButton>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  overflow: hidden;
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
  background-color: #202677;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(9, 8, 57, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 5px 15px rgba(9, 8, 57, 0.2);
  }
`;

const WindImage = styled.img`
  width: 90%;
`;
