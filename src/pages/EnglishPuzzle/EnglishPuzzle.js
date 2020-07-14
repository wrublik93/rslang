import React, { useState, useEffect } from "react";

import StartScreen from "pages/EnglishPuzzle/components/StartScreen";
import GameContainer from "pages/EnglishPuzzle/components/GameContainer";
import "pages/EnglishPuzzle/style.scss";

const EnglishPuzzle = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(false);
  }, []);

  return (
    <div className="english-puzzle">
      {start ? (
        <GameContainer />
      ) : (
        <StartScreen onStartClick={() => setStart(true)} />
      )}
    </div>
  );
};

export default EnglishPuzzle;
