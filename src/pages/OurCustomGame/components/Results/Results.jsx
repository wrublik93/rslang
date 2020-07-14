import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ResultItem from "pages/OurCustomGame/components/ResultItem";
import { DATA_URL } from "pages/OurCustomGame/constants";
import "pages/OurCustomGame/components/Results/style.scss";

function Results({ showResults, setShowResults, correct, incorrect }) {
  const [curAudio, setCurAudio] = useState(null);

  const speakItem = (audio) => {
    if (curAudio) {
      curAudio.pause();
    }
    const itemAudio = new Audio(`${DATA_URL}${audio}`);
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
        {correct.map((item) => (
          <ResultItem
            speakItem={speakItem}
            key={item.id}
            text={`${item.text} - ${item.translate} `}
            audio={item.audio}
          />
        ))}
        <h4>I don`t know</h4>
        {incorrect.map((item) => (
          <ResultItem
            speakItem={speakItem}
            key={item.id}
            text={`${item.text} - ${item.translate} `}
            audio={item.audio}
          />
        ))}
      </div>
    </div>
  );
}

export default Results;
