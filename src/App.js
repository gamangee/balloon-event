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
    top: "300px",
    left: "450px",
    deg: "-30deg",
  },
  {
    id: id(),
    color: "#62ff07",
    gradient: "linear-gradient(155deg, #eeffe4, #62ff07)",
    shadow: "#62ff07",
    size: "80",
    top: "400px",
    left: "500px",
    deg: "-40deg",
  },
  {
    id: id(),
    color: "#00d0ff",
    gradient: "linear-gradient(95deg, #c4f7ff, #00d0ff)",
    shadow: "#00d0ff",
    size: "90",
    top: "200px",
    left: "520px",
    deg: "-15deg",
  },
  {
    id: id(),
    color: "#ff5752",
    gradient: "linear-gradient(125deg, #ffc7c0, #ff5752)",
    shadow: "#ff5752",
    size: "100",
    top: "120px",
    left: "580px",
    deg: "-5deg",
  },
  {
    id: id(),
    color: "#f399ff",
    gradient: "linear-gradient(110deg, #fbe2ff, #f399ff)",
    shadow: "#f399ff",
    size: "60",
    top: "320px",
    left: "580px",
    deg: "-10deg",
  },
  {
    id: id(),
    color: "#9881ff",
    gradient: "linear-gradient(110deg, #e9e4ff, #9881ff)",
    shadow: "#9881ff",
    size: "80",
    top: "220px",
    left: "660px",
    deg: "7deg",
  },
  {
    id: id(),
    color: "#ffd107",
    gradient: "linear-gradient(135deg, #ffffc1, #ffff00)",
    shadow: "#ffd103",
    size: "70",
    top: "320px",
    left: "680px",
    deg: "8deg",
  },
  {
    id: id(),
    color: "#00dc25",
    gradient: "linear-gradient(125deg, #cfffcf, #00dc25)",
    shadow: "#00dc25",
    size: "110",
    top: "130px",
    left: "790px",
    deg: "16deg",
  },
  {
    id: id(),
    color: "#ff6e07",
    gradient: "linear-gradient(155deg, #ffe0c9, #ff6e07)",
    shadow: "#ff6e07",
    size: "60",
    top: "290px",
    left: "770px",
    deg: "15deg",
  },
  {
    id: id(),
    color: "#ff99e7",
    gradient: "linear-gradient(110deg, #ffe2f8, #ff99e7)",
    shadow: "#ff99e7",
    size: "80",
    top: "270px",
    left: "860px",
    deg: "30deg",
  },
  {
    id: id(),
    color: "#1a85ff",
    gradient: "linear-gradient(95deg, #afd4ff, #1a85ff)",
    shadow: "#1a85ff",
    size: "60",
    top: "370px",
    left: "810px",
    deg: "24deg",
  },
  {
    id: id(),
    color: "#45fff3",
    gradient: "linear-gradient(90deg, #ddfffd, #45fff3)",
    shadow: "#45fff3",
    size: "88",
    top: "380px",
    left: "900px",
    deg: "38deg",
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
    let randomTop = getRandomNumber(100, 500);
    let randomLeft = getRandomNumber(100, 1200);

    let randomRotation;
    if (randomLeft <= window.innerWidth / 2) {
      randomRotation = getRandomNumber(-30, 0);
    } else {
      randomRotation = getRandomNumber(0, 30);
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
          top: `${randomTop}px`,
          left: `${randomLeft}px`,
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
    }, 3000);
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
  min-width: 1300px;
  width: 100%;
  height: 100%;
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
