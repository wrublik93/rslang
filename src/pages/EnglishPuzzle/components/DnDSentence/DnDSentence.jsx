import React, { useState, useMemo, useCallback, useEffect } from "react";
import Word from "pages/EnglishPuzzle/components/Word";
import shuffle from "pages/EnglishPuzzle/shuffle";
import "pages/EnglishPuzzle/components/DnDSentence/style.scss";

function DnDSentence({
  isKnow,
  setCurResult,
  correct,
  isChecked,
  setIsChecked,
  groupsRow,
  imgHeight,
  imgWidth,
  img,
  i,
}) {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [isOnDragBlock, setIsOnDragBlock] = useState(false);
  const [curResultWords, setCurResultWords] = useState([]);
  const [curWords, setCurWords] = useState([]);
  const [widthCount, setWidthCount] = useState([0]);
  const wordCount = correct.length;
  const letterCounts = useMemo(
    () => correct.reduce((acc, val) => acc + val.length, 0),
    [correct]
  );
  const extraWidth = useMemo(() => Math.round(letterCounts / wordCount), [
    letterCounts,
    wordCount,
  ]);
  const onePart = Math.round((imgWidth - letterCounts) / letterCounts);
  const canvasHeight = useMemo(() => Math.round(imgHeight / groupsRow), [
    imgHeight,
    groupsRow,
  ]);
  const startYPointCropImage = useMemo(() => canvasHeight * i, [
    canvasHeight,
    i,
  ]);
  const addWidthCount = useCallback(
    (val, ind) => {
      if (widthCount.length === ind + 1) {
        setWidthCount([...widthCount, widthCount.slice(-1)[0] + val]);
      }
    },
    [widthCount]
  );

  function setColorClass(cur, cor) {
    if (isChecked) {
      return cur === cor ? "green" : "red";
    }
    return "";
  }
  const onDragStartHandle = (e) => {
    setFrom(Number(e.currentTarget.dataset.index));
  };

  useEffect(() => {
    setWidthCount([0]);
  }, [correct]);

  const onResultDragOverHandle = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const { index } = target.dataset;
    setTo(index);
  };

  const onContainerOverHandle = (e) => {
    e.preventDefault();
    if (e.currentTarget.classList.contains("dnDcontainer-dragContainer")) {
      setIsOnDragBlock(true);
      if (curWords.length === 0) setTo(0);
    }
    if (
      e.currentTarget.classList.contains("dnDcontainer-dropContainer") &&
      to === null
    )
      setTo(curResultWords.length);
    if (curResultWords.length === 0) setTo(0);
  };

  const onDragEndHandle = () => {
    if (to === null) return;
    if (to >= 0) {
      const newCurWords = [...curWords];
      const newCurResultWords = [...curResultWords];
      const [newWord] = newCurWords.splice(from, 1);
      newCurResultWords.splice(to, 0, newWord);
      if (newCurResultWords.length === correct.length) {
        setCurResult(newCurResultWords.map((item) => item.props.word));
      }
      setCurResultWords(newCurResultWords);
      setCurWords(newCurWords);
    }
    setFrom(null);
    setTo(null);
    setIsChecked(false);
  };

  const onResultDragEndHandle = () => {
    if (to === null) return;
    const newCurResultWords = [...curResultWords];
    if (isOnDragBlock) {
      const newCurWords = [...curWords];
      const [newWord] = newCurResultWords.splice(from, 1);
      newCurWords.splice(to, 0, newWord);
      setCurWords(newCurWords);
    } else {
      newCurResultWords.splice(to, 0, newCurResultWords.splice(from, 1)[0]);
    }
    setCurResultWords(newCurResultWords);
    setFrom(null);
    setTo(null);
    setIsChecked(false);
  };

  const onDragResultLeaveHandle = (e) => {
    if (!e.target.closest(".dnDcontainer-dropContainer")) setTo(null);
  };

  const onDragLeaveHandle = (e) => {
    if (!e.target.closest(".dnDcontainer-dragContainer")) {
      setTo(null);
    }
    setIsOnDragBlock(false);
  };

  const onClickHandle = (e) => {
    const newCurWords = [...curWords];
    const newCurResultWords = [...curResultWords];
    const newFrom = e.currentTarget.dataset.index;
    const newTo = newCurResultWords.length;
    const [newWord] = newCurWords.splice(newFrom, 1);
    newCurResultWords.splice(newTo, 0, newWord);
    if (newCurResultWords.length === correct.length) {
      setCurResult(newCurResultWords.map((item) => item.props.word));
    }
    setCurResultWords(newCurResultWords);
    setCurWords(newCurWords);
  };

  const onResultClickHandle = (e) => {
    const newCurWords = [...curWords];
    const newCurResultWords = [...curResultWords];
    const newFrom = e.currentTarget.dataset.index;
    const newTo = newCurWords.length;
    const [newWord] = newCurResultWords.splice(newFrom, 1);
    newCurWords.splice(newTo, 0, newWord);
    setCurResult(null);
    setCurResultWords(newCurResultWords);
    setCurWords(newCurWords);
  };

  const getCanvasWords = useCallback(
    (array) =>
      array.map((item, g) => (
        <Word
          text={item}
          key={item + widthCount[g]}
          img={img}
          widthCount={widthCount[g]}
          addWidthCount={addWidthCount}
          startYPointCropImage={startYPointCropImage}
          canvasHeight={canvasHeight}
          j={g}
          extraWidth={extraWidth}
          word={item}
          imgWidth={imgWidth}
          onePart={onePart}
          wordCount={wordCount}
          opacity={0.7}
        />
      )),
    [
      widthCount,
      startYPointCropImage,
      canvasHeight,
      addWidthCount,
      extraWidth,
      img,
      imgWidth,
      onePart,
      wordCount,
    ]
  );

  useEffect(() => {
    if (isKnow) {
      setCurResult(correct);
      setCurWords([]);
      setCurResultWords(getCanvasWords(correct));
    } else if (isChecked) {
      setCurWords([]);
    } else {
      setCurWords(shuffle(getCanvasWords(correct)));
      setCurResultWords([]);
    }
  }, [correct, isChecked, isKnow, getCanvasWords, setCurResult]);

  const onKeyDownHandle = (e) => {
    if (e.key === "Enter") {
      onClickHandle(e);
    }
  };

  const onResultKeyDownHandle = (e) => {
    if (e.key === "Enter") {
      onResultClickHandle(e);
    }
  };

  return (
    <div className="dnDcontainer">
      <div
        className="dnDcontainer-dropContainer"
        onDragEnd={onResultDragEndHandle}
        onDragOver={onContainerOverHandle}
        onDragLeave={onDragResultLeaveHandle}
        data-array="result"
      >
        {curResultWords.map((item, h) => (
          <span
            data-index={h}
            key={item.props.j}
            className={`dnDcontainer-box
                  ${setColorClass(item.props.word, correct[h])}`}
            draggable
            role="button"
            tabIndex={h}
            onKeyDown={onResultKeyDownHandle}
            onDragStart={onDragStartHandle}
            onDragOver={onResultDragOverHandle}
            onClick={onResultClickHandle}
            onDragEnd={onResultDragEndHandle}
          >
            {item}
          </span>
        ))}
      </div>
      <div
        className="dnDcontainer-dragContainer"
        onDragLeave={onDragLeaveHandle}
        onDragOver={onContainerOverHandle}
        data-array="words"
      >
        {curWords.map((item, n) => (
          <span
            data-index={n}
            key={item.props.j}
            className="dnDcontainer-box"
            draggable
            role="button"
            tabIndex={n}
            onDragStart={onDragStartHandle}
            onKeyDown={onKeyDownHandle}
            onDragEnd={onDragEndHandle}
            onClick={onClickHandle}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DnDSentence;
