import React, { useState } from "react";
import GameSpeakIt from "./components/GameSpeakIt";
import StartPageSpeakIt from "./components/StartPageSpeakIt";
import "./style.scss";

const SpeakIt = () => {
  const [startGame, setStartGame] = useState(false);
  const [levelGame, setLevelGame] = useState(0);

  return (
    <div className="speak-it-main">
      <div className="speak-it-wrapper">
        {!startGame && (
          <StartPageSpeakIt
            setStartGame={setStartGame}
            setLevelGame={setLevelGame}
            levelGame={levelGame}
          />
        )}
        {startGame && (
          <GameSpeakIt startGame={startGame} levelGame={levelGame} />
        )}
      </div>
    </div>
  );
};

export default SpeakIt;
