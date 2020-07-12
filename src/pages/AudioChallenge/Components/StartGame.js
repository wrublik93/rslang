import React, { useCallback } from "react";
import "pages/AudioChallenge/Components/index.scss";
import { Button } from "react-bootstrap";

export default function StartGameAudio({ setstartGamePages }) {
  const handleClickStart = useCallback(() => {
    setstartGamePages(true);
  }, [setstartGamePages]);

  return (
    <div className="start-page">
      <div className="guide">
        <div className="appName"> Audio Challenge</div>
        <div className="app-describe">
          Training improves listening comprehension.
        </div>
        <Button className="play-button" onClick={handleClickStart}>
          Start
        </Button>
      </div>
    </div>
  );
}
