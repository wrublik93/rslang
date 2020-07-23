import React from "react";
import "pages/Savanna/style.scss";

import CommonStartScreen from "components/CommonStartScreen";
import { Card } from "react-bootstrap";

export default function Intro({ setGameState, setLevelWord }) {
  return (
    <CommonStartScreen
      title="SAVANNAH"
      onStartClick={() => setGameState("countDownSavanna")}
    >
      <Card.Body>
        <Card.Title>Coaching Savannah develops vocabulary</Card.Title>
        <Card.Text>
          The more words you know the more experience points you get
        </Card.Text>
        <div className="intro-container">
          <div className="inputLevel__container">
            {" "}
            <p>Select the difficulty level :</p>
            <div>
              <span className="difficultyLevel">1</span>
              <input
                className="inputLevel"
                type="range"
                min="1"
                max="6"
                onChange={(e) => {
                  setLevelWord(e.target.value - 1);
                }}
              />
              <span className="difficultyLevel">6</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </CommonStartScreen>
  );
}
