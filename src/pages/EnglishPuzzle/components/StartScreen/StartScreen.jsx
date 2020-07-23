import React from "react";

import CommonStartScreen from "components/CommonStartScreen";
import "pages/EnglishPuzzle/components/StartScreen/style.scss";
import { Card } from "react-bootstrap";

function StartScreen({ onStartClick }) {
  return (
    <CommonStartScreen title="English puzzle" onStartClick={onStartClick}>
      <Card.Body>
        <Card.Title className="text-center">Click on words</Card.Title>
        <Card.Text className="text-center">
          Words can be drag and drop
        </Card.Text>
        <Card.Text className="text-center">
          Select tooltips in the menu
        </Card.Text>
      </Card.Body>
    </CommonStartScreen>
  );
}

export default React.memo(StartScreen);
