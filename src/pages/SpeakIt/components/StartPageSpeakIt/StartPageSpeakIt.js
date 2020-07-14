import React, { useCallback } from "react";
import { Button, Card, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import "pages/SpeakIt/components/StartPageSpeakIt/style.scss";

const StartPageSpeakIt = ({ setStartGame, setLevelGame, levelGame }) => {
  const levelButtons = [1, 2, 3, 4, 5, 6];

  const handleClickStart = useCallback(() => {
    setStartGame(true);
  }, [setStartGame]);

  const handleClickLevel = useCallback(
    (e) => {
      setLevelGame(e.target.innerText - 1);
    },
    [setLevelGame]
  );

  return (
    <Card className="text-center">
      <Card.Header>SpeakIt Game</Card.Header>
      <Card.Body>
        <Card.Title>Click on the words to hear them sound</Card.Title>
        <Card.Text>
          Click on the button and speak the words into the microphone
        </Card.Text>
        <Card.Text>Select the difficulty level: {levelGame + 1}</Card.Text>
        <ButtonToolbar className="speak-it-level-toolbar">
          <ButtonGroup className="mr-2" aria-label="First group">
            {levelButtons.map((button) => (
              <Button key={button} onClick={handleClickLevel}>
                {button}
              </Button>
            ))}
          </ButtonGroup>
        </ButtonToolbar>
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
export default StartPageSpeakIt;
