import React from "react";
import "pages/Savanna/style.scss";

import CommonStartScreen from "components/CommonStartScreen";

export default function Intro({ setGameState, setLevelWord }) {
  return (
    <CommonStartScreen
      title="SAVANNAH"
      onStartClick={() => setGameState("countDownSavanna")}
    >
      <div className="intro-container">
        <p>
          Coaching Savannah develops vocabulary. The more words you know the
          more experience points you get.
        </p>
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
    </CommonStartScreen>
  );
}
