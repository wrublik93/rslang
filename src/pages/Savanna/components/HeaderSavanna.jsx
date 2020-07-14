import React from "react";
import "pages/Savanna/style.scss";
import StarsContainer from "pages/Savanna/components/game/StarsContainer";

export default function HeaderSavanna({
  setModalWindowVisible,
  setSoundState,
  soundState,
  starVisible,
  numberOfStars,
}) {
  const soundClassName = ["sound"];
  if (soundState) {
    soundClassName.push("sound-on");
  } else {
    soundClassName.push("sound-off");
  }

  return (
    <div className="header-savanna">
      <button
        type="button"
        className={soundClassName.join(" ")}
        onClick={() => setSoundState(!soundState)}
      >
        sound
      </button>
      {starVisible && <StarsContainer numberOfStars={numberOfStars} />}
      <button
        type="button"
        className="close-savanna"
        onClick={() => setModalWindowVisible(true)}
      >
        <span>&times;</span>
      </button>
    </div>
  );
}
