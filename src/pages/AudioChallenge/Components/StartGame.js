import React, { useCallback } from "react";
import { Button, Card } from "react-bootstrap";
import "pages/AudioChallenge/Components/index.scss";
import CommonStartScreen from "components/CommonStartScreen";

export default function StartGameAudio({ setstartGamePages, setLevel }) {
  const handleClickStart = useCallback(() => {
    setstartGamePages(true);
  }, [setstartGamePages]);

  const isSelect = (event) => {
    const valueSelect = event.target.value - 1;
    setLevel(valueSelect);
  };

  return (
    <CommonStartScreen onStartClick={handleClickStart} title="Audio Challenge">
      <Card.Body>
        <Card.Title className="text-center">
          Training improves listening comprehension
        </Card.Title>
        <Card.Text className="text-center">Select level:</Card.Text>
        <Card.Text className="text-center">
          <Button onChange={isSelect} as="select" custom="true">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Button>
        </Card.Text>
      </Card.Body>
    </CommonStartScreen>
  );
}
