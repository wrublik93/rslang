import React, { useCallback } from "react";
import { Card, Form } from "react-bootstrap";

import "pages/Sprint/components/StartPageSprint/style.scss";

import CommonStartScreen from "components/CommonStartScreen";

const StartPageSprint = ({ setStartGame, setLevel }) => {
  const handleClickStart = useCallback(() => {
    setStartGame(true);
  }, [setStartGame]);

  const isSelect = (event) => {
    const valueSelect = event.target.value - 1;
    setLevel(valueSelect);
  };

  return (
    <CommonStartScreen title="Sprint" onStartClick={handleClickStart}>
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
      </Card.Body>
    </CommonStartScreen>
  );
};
export default StartPageSprint;
