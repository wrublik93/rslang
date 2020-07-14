import React from "react";

import CommonStartScreen from "components/CommonStartScreen";
import "pages/OurCustomGame/components/StartScreen/style.scss";

function StartScreen({ onStartClick }) {
  return (
    <CommonStartScreen title="Memory Game" onStartClick={onStartClick}>
      <div className="startScreen-container-discription">
        <h4>Rules</h4>
        <ol>
          <li>This game will help you learn english words.</li>
          <li>Turn over two cards with the word and its translation.</li>
          <li>
            If you don`t know any word try to remember what picture was on each
            card and where it was.
          </li>
          <li>If the two cards match, you should go again.</li>
          <li>The game is over when all the cards have been matched.</li>
        </ol>
      </div>
    </CommonStartScreen>
  );
}

export default React.memo(StartScreen);
