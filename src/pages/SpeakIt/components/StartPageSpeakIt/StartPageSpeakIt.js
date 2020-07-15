import React, { useCallback } from "react";
import { Button, Card, ButtonGroup, ButtonToolbar } from "react-bootstrap";

import "pages/SpeakIt/components/StartPageSpeakIt/style.scss";
import CommonStartScreen from "components/CommonStartScreen";

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
    <CommonStartScreen title="Speak it" onStartClick={handleClickStart}>
      <Card.Body>
        <Card.Title className="text-center">
          Click on the words to hear them sound
        </Card.Title>
        <Card.Text className="text-center">
          Click on the button and speak the words into the microphone
        </Card.Text>
        <Card.Text className="text-center">
          Select the difficulty level: {levelGame + 1}
        </Card.Text>
        <ButtonToolbar className="speak-it-level-toolbar">
          <ButtonGroup className="mr-2" aria-label="First group">
            {levelButtons.map((button) => (
              <Button
                key={button}
                onClick={handleClickLevel}
                className="speak-it-button-level"
              >
                {button}
              </Button>
            ))}
          </ButtonGroup>
        </ButtonToolbar>
      </Card.Body>
    </CommonStartScreen>
  );
};
export default StartPageSpeakIt;
