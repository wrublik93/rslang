import React, { useCallback } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./style.scss";

const StartPageSprint = ({ setStartGame, setLevel }) => {
  const handleClickStart = useCallback(() => {
    setStartGame(true);
  }, [setStartGame]);

  const isSelect = (event) => {
    const valueSelect = event.target.value - 1;
    setLevel(valueSelect);
  };

  return (
    <Card className="text-center">
      <Card.Header className="header-card-sprint">Sprint Game</Card.Header>
      <Card.Body>
        <Card.Title>Learn new words and repeat it</Card.Title>
        <Card.Text>Choose the correct word</Card.Text>
        <Form.Group
          className="selectLevelSprint"
          controlId="exampleForm.SelectCustom"
        >
          <Form.Label>Select level</Form.Label>
          <Form.Control onChange={isSelect} as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Form.Group>
        <Button
          variant="outline-primary"
          className="start-button"
          onClick={handleClickStart}
        >
          START GAME
        </Button>
      </Card.Body>
    </Card>
  );
};
export default StartPageSprint;
