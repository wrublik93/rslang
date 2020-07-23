import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import Timer from "pages/OurCustomGame/components/Timer";
import CardField from "pages/OurCustomGame/components/CardField";
import Results from "pages/OurCustomGame/components/Results";
import "pages/OurCustomGame/components/MainContainer/style.scss";
import { imageWinUrl } from "pages/OurCustomGame/constants";

function MainContainer({ words, changeLevel }) {
  const [gameIsOver, setGameIsOver] = useState(false);
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setCorrect([]);
    setIncorrect([]);
  }, [words]);

  useEffect(() => {
    setGameIsOver(false);
  }, [changeLevel]);

  const addCorrect = useCallback(
    (word) => {
      if (
        !correct.find((item) => item.id === word.id) &&
        !incorrect.find((item) => item.id === word.id)
      )
        setCorrect([...correct, word]);
    },
    [correct, incorrect]
  );

  const addIncorrect = useCallback(
    (word) => {
      if (!incorrect.find((item) => item.id === word.id))
        setIncorrect([...incorrect, word]);
    },
    [incorrect]
  );

  return (
    <div className="main-container">
      <Timer gameIsOver={gameIsOver} words={words} />
      <div className={`main-container-end ${gameIsOver ? "full" : ""}`}>
        <img alt="congratulations" src={imageWinUrl} />
        <div className="main-container-end-btns">
          <Button variant="success" onClick={changeLevel}>
            Next
          </Button>
          <Button variant="success" onClick={() => setShowResults(true)}>
            Results
          </Button>
        </div>
      </div>
      <CardField
        words={words}
        setGameIsOver={setGameIsOver}
        addCorrect={addCorrect}
        addIncorrect={addIncorrect}
      />
      <Results
        correct={correct}
        incorrect={incorrect}
        showResults={showResults}
        setShowResults={setShowResults}
      />
    </div>
  );
}

export default MainContainer;
