import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ResultItem from "../ResultItem";
import { AUDIO_URL } from "../../constants";
import "pages/EnglishPuzzle/components/Results/style.scss";

function Results({
  showResults,
  setShowResults,
  correctResults,
  incorrectResults,
}) {
  const [curAudio, setCurAudio] = useState(null);

  const speakItem = (audio) => {
    if (curAudio) {
      curAudio.pause();
    }
    const itemAudio = new Audio(`${AUDIO_URL}${audio}`);
    setCurAudio(itemAudio);
    itemAudio.play();
  };

  return (
    <div className={`modal-container ${showResults ? "visible" : ""}`}>
      <div className="modal-container-modalWindow">
        <Button
          variant="outline-success"
          className="modal-container-modalWindow-btn"
          onClick={() => setShowResults(false)}
        >
          &#10008;
        </Button>
        <h4>I know</h4>
        {correctResults.map((item) => (
          <ResultItem
            speakItem={speakItem}
            key={item.id}
            text={item.textExample.replace(/<\/?b>/g, "")}
            audio={item.audioExample}
          />
        ))}
        <h4>I don`t know</h4>
        {incorrectResults.map((item) => (
          <ResultItem
            speakItem={speakItem}
            key={item.id}
            text={item.textExample.replace(/<\/?b>/g, "")}
            audio={item.audioExample}
          />
        ))}
      </div>
    </div>
  );
}

export default Results;
