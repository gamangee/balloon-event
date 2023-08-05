import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useMode } from "./context/ModeContext";
import { darkTheme, lightTheme } from "./styles/theme";
import Background from "./components/Background";
import OriginBallons from "./components/OriginBallons";
import AddBalloons from "./components/AddBalloons";
import { v4 as id } from "uuid";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
  const colors = [
    {
      shadow: "#ff37ff",
      gradient: "linear-gradient(155deg, #FFC6FF, #ff37ff)",
    },
    {
      shadow: "#ff5855",
      gradient: "linear-gradient(155deg, #FFAEAD, #ff5855)",
    },
    {
      shadow: "#ff9e27",
      gradient: "linear-gradient(155deg, #ffead0, #ff9e27)",
    },
    {
      shadow: "#ffd027",
      gradient: "linear-gradient(155deg, #fdffca, #ffd027)",
    },
    {
      shadow: "#7dff5c",
      gradient: "linear-gradient(155deg, #CBFDBE, #7dff5c)",
    },
    {
      shadow: "#22e178",
      gradient: "linear-gradient(155deg, #A5FFCE, #22e178)",
    },
    {
      shadow: "#55f1ff",
      gradient: "linear-gradient(155deg, #9CF6FF, #55f1ff)",
    },
    {
      shadow: "#5b9aff",
      gradient: "linear-gradient(155deg, #A0C4FF, #5b9aff)",
    },
    {
      shadow: "#816bff",
      gradient: "linear-gradient(155deg, #BDB2FF, #816bff)",
    },
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomSize = () => {
  const sizes = ["50", "60", "70", "80", "90", "100"];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

export default function App() {
  const { isDarkMode } = useMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [balloons, setBalloons] = useState([]);
  const [houseFloating, setHouseFloating] = useState(false);

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
          popped: false,
        },
      ];
    });
  };

  const removeBalloon = (id) => {
    setBalloons((prevBalloons) =>
      prevBalloons.filter((balloon) => balloon.id !== id)
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Background
        handleHouseClick={handleHouseClick}
        houseFloating={houseFloating}
      />
      <AddBalloons
        removeBalloon={removeBalloon}
        balloons={balloons}
        setBalloons={setBalloons}
        setHouseFloating={setHouseFloating}
      />
      <OriginBallons />
    </ThemeProvider>
  );
}
