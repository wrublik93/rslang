import React from "react";

import CommonStartScreen from "components/CommonStartScreen";
import "pages/EnglishPuzzle/components/StartScreen/style.scss";

function StartScreen({ onStartClick }) {
  return (
    <CommonStartScreen title="English puzzle" onStartClick={onStartClick}>
      <div className="startScreen-discription">
        <p>Click on words.</p>
        <p>Words can be drag and drop. Select tooltips in the menu.</p>
      </div>
    </CommonStartScreen>
  );
}

export default React.memo(StartScreen);
