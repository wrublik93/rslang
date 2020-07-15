import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";
import "pages/Sprint/components/GameOverSprint/style.scss";

const GameOverSprint = ({ rightAnswers, wrongAnswers, resultScore }) => {
  const [isArrayWords, setArrayWords] = useState(0);
  const handlerClickCheck = useCallback((isCheck) => {
    if (isCheck) setArrayWords(1);
    else setArrayWords(2);
  }, []);
  const history = useHistory();
  const handleOnClick = (path) => {
    history.push(`/${path}`);
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header className="header-gameover-sprint">GAME OVER</Card.Header>
        <Card.Body>
          <Card.Title>Your result {resultScore} points</Card.Title>
          <Card.Text>I like you</Card.Text>
          <Button
            variant="outline-primary"
            className="home-button"
            onClick={() => handleOnClick("home")}
          >
            Home
          </Button>
        </Card.Body>
      </Card>
      <div className="result-buttons">
        <Button
          variant="outline-success"
          className="button-sprint"
          onClick={() => handlerClickCheck(true)}
        >
          right answers
        </Button>
        <Button
          variant="outline-danger"
          className="button-sprint"
          onClick={() => handlerClickCheck(false)}
        >
          wrong answers
        </Button>
      </div>
      <ListGroup>
        {isArrayWords === 1 &&
          rightAnswers.map((item) => (
            <ListGroup.Item key={item.word}>
              {item.word} - {item.wordTranslate}
            </ListGroup.Item>
          ))}
        {isArrayWords === 2 &&
          wrongAnswers.map((item) => (
            <ListGroup.Item key={item.word}>
              {item.word} - {item.wordTranslate}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default GameOverSprint;
