import React from "react";
import "pages/Savanna/style.scss";

export default function Word({ word }) {
  return (
    <div className="word marquee">
      <span className="studiedWord">{word}</span>
    </div>
  );
}
