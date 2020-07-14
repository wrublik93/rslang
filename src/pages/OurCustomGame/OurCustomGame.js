import React, { useState, useEffect } from "react";

import StartScreen from "pages/OurCustomGame/components/StartScreen";
// eslint-disable-next-line max-len
import MemoryGameContainer from "pages/OurCustomGame/components/MemoryGameContainer";

import "pages/OurCustomGame/style.scss";

const OurCustomGame = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(false);
  }, []);

  return (
    <div className="our-custom-game">
      {start ? (
        <MemoryGameContainer />
      ) : (
        <StartScreen onStartClick={() => setStart(true)} />
      )}
    </div>
  );
};

export default OurCustomGame;
