import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import Results from "pages/EnglishPuzzle/components/Results";
import BtnsGroup from "pages/EnglishPuzzle/components/BtnsGroup";
import DnDSentence from "pages/EnglishPuzzle/components/DnDSentence";
import "pages/EnglishPuzzle/components/GameField/style.scss";

function GameField({
  setCurrentWord,
  correct,
  setCorrect,
  words,
  level,
  raund,
  addResult,
  setIsGameOver,
  endRaund,
  groupsRow,
  imgHeight,
  imgWidth,
  img,
  i,
}) {
  const [raundIsFinished, setRaundIsFinished] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isKnow, setIsKnow] = useState(false);
  const [curResult, setCurResult] = useState(null);
  const [index, setIndex] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [correctResults, setCorrectResults] = useState([]);
  const [incorrectResults, setIncorrectResults] = useState([]);
  const setNewSentenseData = useCallback(
    (word) => {
      if (word) {
        setCurrentWord(word);
        const curSentence = word.textExample.replace(/<\/?b>/g, "").split(" ");
        setCorrect(curSentence);
        setIsChecked(false);
      }
    },
    [setCurrentWord, setCorrect]
  );

  useEffect(() => {
    setNewSentenseData(words[0]);
    setIndex(1);
    setIncorrectResults([]);
    setCorrectResults([]);
    setIsCorrect(false);
  }, [words, setNewSentenseData]);

  function check() {
    if (curResult.join(" ") === correct.join(" ")) {
      setIsCorrect(true);
      setCorrectResults([...correctResults, words[index - 1]]);
    }
    setIsChecked(true);
  }

  function know() {
    setIsKnow(true);
    setIsCorrect(true);
    setIsChecked(true);
    setIncorrectResults([...incorrectResults, words[index - 1]]);
  }

  function continueGame() {
    if (raundIsFinished) {
      setRaundIsFinished(false);
      endRaund();
      setIncorrectResults([]);
      setCorrectResults([]);
      setIndex(1);
      setCurResult(null);
    } else {
      if (index === 10) {
        if (level === 5 && raund === 59) {
          setIsGameOver(true);
        }
        setRaundIsFinished(true);
      } else {
        setIndex(index + 1);
        setIsCorrect(false);
        setIsChecked(false);
        setCurResult(null);
      }
      addResult();
      setNewSentenseData(words[index]);
    }
    setIsKnow(false);
  }

  return correct.length ? (
    <div className="gameField-container">
      {raundIsFinished ? null : (
        <DnDSentence
          isKnow={isKnow}
          curResult={curResult}
          setCurResult={setCurResult}
          correct={correct}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          groupsRow={groupsRow}
          imgHeight={imgHeight}
          imgWidth={imgWidth}
          img={img}
          i={i}
        />
      )}
      <div className="gameField-container-btns">
        {curResult ? (
          <BtnsGroup
            raundIsFinished={raundIsFinished}
            isCorrect={isCorrect}
            check={check}
            know={know}
            continueGame={continueGame}
          />
        ) : (
          <Button variant="outline-info" onClick={know}>
            I don`t know
          </Button>
        )}
        {raundIsFinished ? (
          <Button
            variant="outline-success"
            onClick={() => setShowResults(true)}
          >
            Results
          </Button>
        ) : null}
      </div>
      <Results
        correctResults={correctResults}
        incorrectResults={incorrectResults}
        showResults={showResults}
        setShowResults={setShowResults}
      />
    </div>
  ) : null;
}

export default GameField;
