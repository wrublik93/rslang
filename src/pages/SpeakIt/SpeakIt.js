import React, { useState } from "react";
import GameSpeakIt from "pages/SpeakIt/components/GameSpeakIt";
import StartPageSpeakIt from "pages/SpeakIt/components/StartPageSpeakIt";
import "pages/SpeakIt/style.scss";

const SpeakIt = () => {
  const [startGame, setStartGame] = useState(false);
  const [levelGame, setLevelGame] = useState(0);

  return (
    <div className="speak-it-main">
      {!startGame && (
        <StartPageSpeakIt
          setStartGame={setStartGame}
          setLevelGame={setLevelGame}
          levelGame={levelGame}
        />
      )}
      {startGame && (
        <GameSpeakIt
          startGame={startGame}
          setStartGame={setStartGame}
          levelGame={levelGame}
        />
      )}
    </div>
  );
};

export default SpeakIt;
