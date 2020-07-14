import React, { useCallback } from "react";
import "pages/AudioChallenge/Components/index.scss";
import CommonStartScreen from "components/CommonStartScreen";

export default function StartGameAudio({ setstartGamePages }) {
  const handleClickStart = useCallback(() => {
    setstartGamePages(true);
  }, [setstartGamePages]);

  return (
    <CommonStartScreen onStartClick={handleClickStart} title="Audio Challenge">
      <div className="app-describe">
        Training improves listening comprehension.
      </div>
    </CommonStartScreen>
  );
}
