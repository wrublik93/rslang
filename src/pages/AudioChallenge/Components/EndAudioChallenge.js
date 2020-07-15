import React, { useState, useCallback } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "pages/AudioChallenge/Components/index.scss";

const GameOverAudioCall = ({ rightAnswers, wrongAnswers, resultScore }) => {
  const [isArrayWords, setArrayWords] = useState(0);
  const handlerClickCheck = useCallback((isCheck) => {
    if (isCheck) setArrayWords(true);
    else setArrayWords(false);
  }, []);

  const history = useHistory();
  const handleOnClick = (path) => {
    history.push(`/${path}`);
  };

  return (
    <>
      <Card className="GameOver-text">
        <Card.Text className="GameOver-text-resault">
          Your result {resultScore} points
        </Card.Text>
      </Card>
      <Button onClick={() => handleOnClick("home")}>Home</Button>
      <div className="result-buttons">
        <Button variant="outline-light" onClick={() => handlerClickCheck(true)}>
          right answers
        </Button>
        <Button variant="outline-dark" onClick={() => handlerClickCheck(false)}>
          wrong answers
        </Button>
      </div>
      <div>
        {isArrayWords === true &&
          rightAnswers.map((item) => (
            <div key={item.word}>
              {item.word} - {item.wordTranslate}
            </div>
          ))}
        {isArrayWords === false &&
          wrongAnswers.map((item) => (
            <div key={item.word}>
              {item.word} - {item.wordTranslate}
            </div>
          ))}
      </div>
    </>
  );
};

export default GameOverAudioCall;
