import React from "react";
import { Button } from "react-bootstrap";
import Speak from "pages/OurCustomGame/components/ResultItem/Speak";
import "pages/OurCustomGame/components/ResultItem/style.scss";

function ResultItem({ text, audio, speakItem }) {
  return (
    <div className="resultItem-container">
      <div className="resultItem-container-text">{text}</div>
      <Button
        className="resultItem-container-btn"
        variant="info"
        size="sm"
        onClick={() => speakItem(audio)}
      >
        <Speak />
      </Button>
    </div>
  );
}

export default ResultItem;
