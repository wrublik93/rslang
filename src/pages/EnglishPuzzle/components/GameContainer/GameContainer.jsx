import React, { useState, useEffect, useMemo, useCallback } from "react";
import GameField from "pages/EnglishPuzzle/components/GameField";
import SentenceField from "pages/EnglishPuzzle/components/SentenceField";
import Menu from "pages/EnglishPuzzle/components/Menu";
import Helper from "pages/EnglishPuzzle/components/Helper";
import getWords from "pages/EnglishPuzzle/getWords";
import { RAUNDS, SENTENCES } from "pages/EnglishPuzzle/constants";
import "pages/EnglishPuzzle/components/GameContainer/style.scss";

function GameContainer() {
  const [words, setWords] = useState([]);
  const [results, setResults] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentWord, setCurrentWord] = useState({});
  const [raund, setRaund] = useState(0);
  const [level, setLevel] = useState(0);
  const [page, setPage] = useState(0);
  const [img, setImg] = useState();
  const [imgData, setImgData] = useState(null);

  const imgWidth = 1097;
  const imgHeight = 722;
  const groupsRow = SENTENCES;

  const setNewImage = useCallback((image) => {
    const newImg = new Image();
    newImg.src = image.imageSrc;
    newImg.onload = () => {
      setImg(newImg);
      setImgData(image);
    };
  }, []);

  useEffect(() => {
    getWords(page, level).then((data) => {
      setWords(data);
    });
  }, [page, level]);

  function endRaund() {
    setResults([]);
    let newRaund;
    if (raund === RAUNDS) {
      newRaund = 0;
      setLevel(level + 1);
      setPage(0);
    } else {
      newRaund = +raund + 1;
      if (page !== Math.floor(newRaund / 2)) {
        setPage(Math.floor(newRaund / 2));
      }
    }
    setRaund(newRaund);
  }

  function changeLevel(lev) {
    setLevel(lev);
    setResults([]);
  }

  function changeRaund(r) {
    setRaund(r);
    setResults([]);
  }

  function addResult() {
    setResults([...results, correct]);
  }

  const raundWords = useMemo(() => {
    const startIndex = +raund % 2 ? SENTENCES : 0;
    return words ? words.slice(startIndex, startIndex + SENTENCES) : [];
  }, [words, raund]);

  return isGameOver ? (
    <h2>Game over</h2>
  ) : (
    <div className="gameContainer">
      <div className="gameContainer-toolsContainer">
        <Menu
          level={level}
          setLevel={changeLevel}
          raund={raund}
          setRaund={changeRaund}
          page={page}
          setPage={setPage}
        />
        <Helper
          word={currentWord}
          setImg={setNewImage}
          level={level}
          raund={raund}
          raundIsOver={results.length === SENTENCES}
        />
      </div>
      <div className="gameContainer-main">
        <div className="gameContainer-main-wrapper">
          {words.length > 0 ? (
            <SentenceField
              words={results}
              opacity={results.length === SENTENCES ? 0 : 0.7}
              imgData={imgData}
              groupsRow={groupsRow}
              imgHeight={imgHeight}
              imgWidth={imgWidth}
              img={img}
            />
          ) : null}
          <GameField
            i={results.length}
            raund={raund}
            currentWord={currentWord}
            addResult={addResult}
            level={level}
            setCurrentWord={setCurrentWord}
            correct={correct}
            setCorrect={setCorrect}
            words={raundWords}
            setIsGameOver={setIsGameOver}
            endRaund={endRaund}
            groupsRow={groupsRow}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
            img={img}
          />
        </div>
      </div>
    </div>
  );
}

export default GameContainer;
