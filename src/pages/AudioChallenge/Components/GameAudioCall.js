import React, { useState, useEffect, useCallback } from "react";
import { getData } from "services/services";
import { Button, Spinner } from "react-bootstrap";
import { RandomInteger, RightAnswer } from "utils/utils";
import { LinkMed } from "constants/constants";
import Correct from "assets/AudioChallenge/audio/correct.mp3";
import ErrorSound from "assets/AudioChallenge/audio/error.mp3";
import ImageWord from "assets/Vocabulary/sound.svg";

const audioCorrect = new Audio(Correct);
const audioError = new Audio(ErrorSound);

const GameAudioChallenge = ({
  startGamePages,
  setRightAnswers,
  setWrongAnswers,
  setendGamePages,
  setResultScore,
  level,
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
  const [isLoading, setIsLoading] = useState(true);

  const getNewRandomWord = useCallback((count, items) => {
    const randIndex = RandomInteger(0, count);
    const randWord = items[randIndex];
    return randWord;
  }, []);

  useEffect(() => {
    const pages = RandomInteger(0, 6);
    const getWords = async () => {
      const fetchData = getData(level, pages);
      const newWords = await fetchData();
      setWords(newWords);
      const current = newWords[newWords.length - 1];
      setCurrentWord(current);
      setIsLoading(false);
    };
    getWords();
  }, [level]);

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

  useEffect(() => {
    if (startGamePages) {
      if (
        words.length === 10 ||
        words.length === 110 ||
        words.length === 70 ||
        words.length === 50 ||
        words.length === 90 ||
        words.length === 30 ||
        point === 10
      ) {
        setendGamePages(true);
        setResultScore(point);
      }
    }
  }, [level, startGamePages, words, setendGamePages, point, setResultScore]);

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
    window.addEventListener("keyup", handleUserKeyPress);
    window.addEventListener("keyup", next);

    return () => {
      window.removeEventListener("keyup", handleUserKeyPress);
      window.removeEventListener("keyup", next);
    };
  }, [next, handleUserKeyPress]);

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
        {isLoading ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <div>
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
        )}
      </div>
    </>
  );
};

export default GameAudioChallenge;
