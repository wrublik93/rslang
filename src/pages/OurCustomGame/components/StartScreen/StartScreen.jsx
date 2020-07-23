import React from "react";

import CommonStartScreen from "components/CommonStartScreen";
import { Card } from "react-bootstrap";

import "pages/OurCustomGame/components/StartScreen/style.scss";

function StartScreen({ onStartClick }) {
  return (
    <CommonStartScreen title="Memory Game" onStartClick={onStartClick}>
      <Card.Body>
        <Card.Title className="text-center">Rules:</Card.Title>
        <Card.Text className="text-center">
          1) This game will help you learn english words
        </Card.Text>
        <Card.Text className="text-center">
          2) Turn over two cards with the word and its translation
        </Card.Text>
        <Card.Text className="text-center">
          3) If you don`t know any word try to remember what picture was on each
          card and where it was
        </Card.Text>
        <Card.Text className="text-center">
          4) If the two cards match, you should go again
        </Card.Text>
        <Card.Text className="text-center">
          5) The game is over when all the cards have been matched
        </Card.Text>
      </Card.Body>
    </CommonStartScreen>
  );
}

export default React.memo(StartScreen);
