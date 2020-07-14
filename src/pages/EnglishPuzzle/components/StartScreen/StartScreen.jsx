import React from "react";
import LinkButton from "components/LinkButton";
import "pages/EnglishPuzzle/components/StartScreen/style.scss";

function StartScreen({ link }) {
  return (
    <div className="startScreen-container">
      <h2 className="startScreen-container-title">English puzzle</h2>
      <div className="startScreen-container-discription">
        <p>Click on words.</p>
        <p>Words can be drag and drop. Select tooltips in the menu.</p>
      </div>
      <LinkButton link={link}>Start</LinkButton>
    </div>
  );
}

export default React.memo(StartScreen);
