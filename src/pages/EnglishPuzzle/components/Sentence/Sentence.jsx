import React, { useState, useMemo } from "react";
import Word from "../Word";
import "pages/EnglishPuzzle/components/Sentence/style.scss";

function Sentence({ data, imgWidth, imgHeight, groupsRow, img, i, opacity }) {
  const [widthCount, setWidthCount] = useState([0]);
  const wordCount = data.length;
  const letterCounts = data.reduce((acc, val) => acc + val.length, 0);
  const extraWidth = Math.round(letterCounts / wordCount);
  const onePart = Math.round((imgWidth - letterCounts) / letterCounts);
  const canvasHeight = useMemo(() => Math.round(imgHeight / groupsRow), [
    imgHeight,
    groupsRow,
  ]);
  const startYPointCropImage = canvasHeight * i;

  const addWidthCount = (val, k) => {
    if (widthCount.length === k + 1) {
      setWidthCount([...widthCount, widthCount.pop() + val]);
    }
  };

  const newData = useMemo(
    () =>
      data.map((item, g) => {
        return {
          word: item,
          id: g + item,
        };
      }),
    [data]
  );

  return (
    <div className={`sentence-container group-words row-${i + 1}`}>
      <div className="sentence-container-num">{i + 1}</div>
      {newData.map((item, n) => (
        <Word
          data-index={n}
          img={img}
          widthCount={widthCount[n]}
          addWidthCount={addWidthCount}
          startYPointCropImage={startYPointCropImage}
          canvasHeight={canvasHeight}
          key={item.id}
          j={n}
          extraWidth={extraWidth}
          word={item.word}
          imgWidth={imgWidth}
          onePart={onePart}
          wordCount={wordCount}
          opacity={opacity}
        />
      ))}
    </div>
  );
}

export default Sentence;
