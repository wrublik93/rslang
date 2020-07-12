import React, { useState, useEffect, useCallback } from "react";
import { getData } from "services/services";
import { Button } from "react-bootstrap";
import { RandomInteger, RightAnswer } from "utils/utils";
import { LinkMed } from "constants/constants";
import Correct from "assets/AudioChallenge/audio/correct.mp3";
import ErrorSound from "assets/AudioChallenge/audio/error.mp3";
import ImageWord from "assets/AudioChallenge/image/audio.png";

const audioCorrect = new Audio(Correct);
const audioError = new Audio(ErrorSound);

const GameAudioChallenge = ({
  startGamePages,
  setRightAnswers,
  setWrongAnswers,
  setendGamePages,
  setResultScore,
}) => {
  const [isDisabled, setDisabled] = useState(false);
  const [wordImg, setWordImg] = useState(false);
  const [wordEnglish, setWordEnglish] = useState(false);
  const [point, setPoint] = useState(0);
  const [translate, setTranslate] = useState(" ");
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState({
    word: "",
    wordTranslate: "",
    audio: "",
    image: LinkMed,
  });
  const [page, setPage] = useState(0);

  const getNewRandomWord = useCallback((count, items) => {
    const randIndex = RandomInteger(0, count);
    const randWord = items[randIndex];
    return randWord;
  }, []);

  useEffect(() => {
    const getWords = async () => {
      setPage(0);
      const fetchData = getData(page);
      const newWords = await fetchData();
      setWords(newWords);
      const current = newWords[newWords.length - 1];
      setCurrentWord(current);
    };
    getWords();
  }, [page]);

  useEffect(() => {
    if (startGamePages) {
      if (words.length === 110) {
        setendGamePages(true);
        setResultScore(point);
      }
    }
  }, [page, startGamePages, words, setendGamePages, point, setResultScore]);

  useEffect(() => {
    if (Object.values(currentWord).length && words.length) {
      const addElements = words.length - 1;
      const wrongTranslate = getNewRandomWord(addElements, words);
      const wrongTranslate2 = getNewRandomWord(addElements, words);
      const wrongTranslate3 = getNewRandomWord(addElements, words);
      const wrongTranslate4 = getNewRandomWord(addElements, words);

      const arrayCompareWords = [
        currentWord.wordTranslate,
        wrongTranslate.wordTranslate,
        wrongTranslate2.wordTranslate,
        wrongTranslate3.wordTranslate,
        wrongTranslate4.wordTranslate,
      ];
      const randomWord = arrayCompareWords.sort(() => {
        return Math.random() - 0.5;
      });
      setTranslate(randomWord);
    }
  }, [words, currentWord, getNewRandomWord]);

  const handlerClickWord = useCallback(
    (correctTranslation) => {
      if (correctTranslation === currentWord.wordTranslate) {
        setRightAnswers(words[words.length - 1]);
        audioCorrect.play();
        const result = RightAnswer(point);
        setPoint(result);
        setDisabled(true);
        setWordImg(true);
        setWordEnglish(true);
      } else {
        audioError.play();
        setWrongAnswers(words[words.length - 1]);
        setDisabled(true);
        setWordImg(true);
        setWordEnglish(true);
      }
    },
    [
      currentWord.wordTranslate,
      point,
      words,
      setRightAnswers,
      setWrongAnswers,
      setWordImg,
      setWordEnglish,
    ]
  );

  function Sound() {
    const audioPlay = new Audio(LinkMed + currentWord.audio);
    return audioPlay.play();
  }

  const nextWord = useCallback(() => {
    const wordsUpdated = words.filter(({ word }) => word !== currentWord.word);
    setWords(wordsUpdated);
    setCurrentWord(wordsUpdated[wordsUpdated.length - 1]);
    setDisabled(false);
    setWordImg(false);
    setWordEnglish(false);
  }, [currentWord.word, words]);

  const next = useCallback(
    (event) => {
      const { keyCode } = event;
      if (keyCode === 13) {
        nextWord();
      }
    },
    [nextWord]
  );

  const handleUserKeyPress = useCallback(
    (event) => {
      const { keyCode } = event;

      if (keyCode === 49 || keyCode === 97) {
        handlerClickWord(translate[0]);
      }
      if (keyCode === 50 || keyCode === 98) {
        handlerClickWord(translate[1]);
      }
      if (keyCode === 51 || keyCode === 99) {
        handlerClickWord(translate[2]);
      }
      if (keyCode === 52 || keyCode === 100) {
        handlerClickWord(translate[3]);
      }
      if (keyCode === 53 || keyCode === 101) {
        handlerClickWord(translate[4]);
      }
    },
    [handlerClickWord, translate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    window.addEventListener("keydown", next);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
      window.removeEventListener("keydown", next);
    };
  }, [handleUserKeyPress, next]);

  return (
    <>
      <div className="game-content-sprint">
        <audio src={LinkMed + currentWord.audio} autoPlay="autoplay">
          <track kind="captions" />
        </audio>
        <div> Score: {point} </div>
        <Button onClick={Sound}>
          <img src={ImageWord} className="Image-word" alt="logo" />
        </Button>

        {wordImg && (
          <img
            src={LinkMed + currentWord.image}
            alt="images"
            className="image-words"
          />
        )}
        {wordEnglish && (
          <div className="word-english">
            {currentWord.word} - {currentWord.wordTranslate}
          </div>
        )}
        <div className="button-translate">
          <ol>
            <Button
              className="button-translate-word"
              disabled={isDisabled}
              onClick={() => handlerClickWord(translate[0])}
            >
              <li>{translate[0]}</li>
            </Button>
            <Button
              className="button-translate-word"
              disabled={isDisabled}
              onClick={() => handlerClickWord(translate[1])}
            >
              <li>{translate[1]}</li>
            </Button>
            <Button
              className="button-translate-word"
              disabled={isDisabled}
              onClick={() => handlerClickWord(translate[2])}
            >
              <li>{translate[2]}</li>
            </Button>
            <Button
              className="button-translate-word"
              disabled={isDisabled}
              onClick={() => handlerClickWord(translate[3])}
            >
              <li>{translate[3]}</li>
            </Button>
            <Button
              className="button-translate-word"
              disabled={isDisabled}
              onClick={() => handlerClickWord(translate[4])}
            >
              <li>{translate[4]}</li>
            </Button>
          </ol>
        </div>
        <Button className="button-next" onClick={nextWord}>
          →
        </Button>
      </div>
    </>
  );
};

export default GameAudioChallenge;
