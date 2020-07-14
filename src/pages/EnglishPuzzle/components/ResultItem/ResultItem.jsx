import React from "react";
import { Button } from "react-bootstrap";
import Speak from "pages/EnglishPuzzle/components/Helper/Speak";
import "pages/EnglishPuzzle/components/ResultItem/style.scss";

function ResultItem({ text, audio, speakItem }) {
  return (
    <div className="resultItem-container">
      <div className="resultItem-container-text">{text}</div>
      <Button variant="outline-info" size="sm" onClick={() => speakItem(audio)}>
        <Speak />
      </Button>
    </div>
  );
}

export default ResultItem;
