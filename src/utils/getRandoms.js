export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomColor = () => {
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

export const getRandomSize = () => {
  const sizes = ["50", "60", "70", "80", "90", "100"];
  return sizes[Math.floor(Math.random() * sizes.length)];
};
