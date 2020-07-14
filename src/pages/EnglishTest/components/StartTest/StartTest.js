import React, { useCallback } from "react";
import { Button, Card } from "react-bootstrap";
import "pages/EnglishTest/components/StartTest/style.scss";

const StartTest = ({ setStartTest }) => {
  const handleClickStart = useCallback(() => {
    setStartTest(true);
  }, [setStartTest]);

  return (
    <Card className="text-center">
      <Card.Header className="header-card-test">Test</Card.Header>
      <Card.Body>
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
    </Card>
  );
};
export default StartTest;
