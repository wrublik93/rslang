import React, { useState } from "react";
import GameSprint from "pages/Sprint/components/GameSprint";
import StartPageSprint from "pages/Sprint/components/StartPageSprint";
import GameOverSprint from "pages/Sprint/components/GameOverSprint";
import "pages/Sprint/style.scss";

const Sprint = () => {
  const [startGame, setStartGame] = useState(false);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [resultScore, setResultScore] = useState(0);
  const [level, setLevel] = useState(0);

  return (
    <div className="sprint">
      {!startGame && !endGame && (
        <StartPageSprint setStartGame={setStartGame} setLevel={setLevel} />
      )}
      {startGame && !endGame && (
        <GameSprint
          level={level}
          startGame={startGame}
          setRightAnswers={(word) => setRightAnswers([...rightAnswers, word])}
          setWrongAnswers={(word) => setWrongAnswers([...wrongAnswers, word])}
          setEndGame={setEndGame}
          setResultScore={setResultScore}
        />
      )}
      {startGame && endGame && (
        <GameOverSprint
          resultScore={resultScore}
          rightAnswers={rightAnswers}
          wrongAnswers={wrongAnswers}
        />
      )}
    </div>
  );
};

export default Sprint;
