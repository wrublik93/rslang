import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "pages/EnglishTest/components/StartTest/style.scss";

const StartTest = ({ setStartTest, userLevel }) => {
  const handleClickStart = useCallback(() => {
    setStartTest(true);
  }, [setStartTest]);
  const history = useHistory();
  const handleOnClick = (path) => {
    history.push(`/${path}`);
  };
  return (
    <Card className="text-center cards-test">
      {!userLevel && (
        <>
          <Card.Header className="header-card-test">Test</Card.Header>
          <Card.Body className="card-body-test-color">
            <Card.Title>
              This test will determine your approximate level of English
            </Card.Title>
            <Card.Text>Choose the correct answer</Card.Text>
            <Button
              variant="outline-primary"
              className="start-button"
              onClick={handleClickStart}
            >
              START TEST
            </Button>
          </Card.Body>
        </>
      )}

      {userLevel && (
        <>
          <Card.Header className="header-gameover-sprint">
            Cool result
          </Card.Header>
          <Card.Body>
            <Card.Title>Your level: {userLevel} </Card.Title>
            <Card.Text>I like you</Card.Text>

            <Button
              variant="outline-primary"
              className="home-button"
              onClick={() => handleOnClick("home")}
            >
              Home
            </Button>
          </Card.Body>
        </>
      )}
    </Card>
  );
};
export default StartTest;
