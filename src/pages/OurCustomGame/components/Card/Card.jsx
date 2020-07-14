import React from "react";
import { DATA_URL } from "pages/OurCustomGame/constants";
import "pages/OurCustomGame/components/Card/style.scss";

function Card({ picture, opened, hidden, onClick, index, text, id }) {
  const onKeyDownHandle = (e) => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };

  return (
    <div
      className={`card-container ${opened ? "opened" : ""}
        ${hidden ? "hidden" : ""}`}
      onClick={onClick}
      data-index={index}
      data-id={id}
      onKeyDown={onKeyDownHandle}
      role="button"
      tabIndex={index}
    >
      <div className="card-container-flipCardFront">{text}</div>
      <div
        className="card-container-flipCardBack"
        style={{ backgroundImage: `url(${DATA_URL}${picture})` }}
      >
        {text}
      </div>
    </div>
  );
}

export default React.memo(Card);
