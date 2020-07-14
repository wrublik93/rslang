import React from "react";
import { SENTENCES } from "pages/EnglishPuzzle/constants";
import Sentence from "pages/EnglishPuzzle/components/Sentence";
import "pages/EnglishPuzzle/components/SentenceField/style.scss";

function SentenceField({
  words,
  groupsRow,
  imgHeight,
  imgWidth,
  img,
  opacity,
  imgData,
}) {
  return (
    <div className="sentenceField-container">
      <div className="sentenceField-container-paintingData">
        {words.length === SENTENCES && imgData.name ? (
          <>
            {imgData.name} - {imgData.author}, {imgData.year}
          </>
        ) : null}
      </div>
      <div>
        {imgWidth > 0
          ? words.map((item, i) => (
              <Sentence
                key={item}
                i={i}
                img={img}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                data={item}
                groupsRow={groupsRow}
                opacity={opacity}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default SentenceField;
