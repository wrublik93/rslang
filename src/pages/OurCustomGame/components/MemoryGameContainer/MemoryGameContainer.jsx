import React, { useState, useEffect, useCallback, useMemo } from "react";
import getWords from "pages/OurCustomGame/getWords";
import Menu from "pages/OurCustomGame/components/Menu";
import MainContainer from "pages/OurCustomGame/components/MainContainer";
import "pages/OurCustomGame/components/MemoryGameContainer/style.scss";

function MemoryGameContainer() {
  const [words, setWords] = useState([]);
  const [level, setLevel] = useState(0);
  const [difficulty, setDifficulty] = useState(6);
  const [page, setPage] = useState(0);
  const [isTheEnd, setIsTheEnd] = useState(false);

  useEffect(() => {
    getWords(page, level).then((data) => {
      setWords(data);
    });
    setIsTheEnd(false);
  }, [page, level]);

  const changeLevel = useCallback(() => {
    if (level === 5 && page === 29) {
      setIsTheEnd(true);
    } else if (page === 29) {
      setLevel(level + 1);
    } else {
      setPage(page + 1);
    }
  }, [page, level]);

  const wordCards = useMemo(() => words.slice(0, difficulty), [
    words,
    difficulty,
  ]);

  return (
    <div className="memoryGameContainer-container">
      <Menu
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        page={page}
        setPage={setPage}
        level={level}
        setLevel={setLevel}
      />
      <MainContainer
        words={wordCards}
        changeLevel={changeLevel}
        isTheEnd={isTheEnd}
      />
    </div>
  );
}

export default MemoryGameContainer;
