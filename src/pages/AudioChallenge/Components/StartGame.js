import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import "pages/AudioChallenge/Components/index.scss";
import CommonStartScreen from "components/CommonStartScreen";

export default function StartGameAudio({ setstartGamePages, setLevel }) {
  const handleClickStart = useCallback(() => {
    setstartGamePages(true);
  }, [setstartGamePages]);

  const isSelect = (event) => {
    const valueSelect = event.target.value - 1;
    setLevel(valueSelect);
  };

  return (
    <CommonStartScreen onStartClick={handleClickStart} title="Audio Challenge">
      <div className="app-describe-audio">
        Training improves listening comprehension.
      </div>
      <div className="app-level-audio">Select level</div>
      <Button onChange={isSelect} as="select" custom="true">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </Button>
    </CommonStartScreen>
  );
}
