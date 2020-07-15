import React, { useState, useEffect } from "react";
import { Spinner, Image, Card, Button, Modal } from "react-bootstrap";

import { getDataSpeakIt } from "services/services";
import "pages/SpeakIt/components/GameSpeakIt/style.scss";

const GameSpeakIt = ({ levelGame, setStartGame }) => {
  const PlayImage = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/SpeakIt/play.png`;
  const MainImage = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/SpeakIt/main-image.png`;
  const databaseURL = "https://raw.githubusercontent.com/";
  const githubUser = "wrublik93/rslang-data/master/data/";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [classesCard] = useState(["speak-it-word-block"]);
  const [resultsWrongGame, setResultsWrongGame] = useState([]);
  const [resultsRightGame, setResultsRightGame] = useState([]);
  const [classesRecord] = useState(["speak-it-button-restart-game"]);
  const [variantRecord, setVariantRecord] = useState("primary");
  const [level] = useState(levelGame);
  const [scoreGame, setScoreGame] = useState(
    "Press \"Start speak\" to start game..."
  );
  const [mainImage, setMainImage] = useState(MainImage);
  const [translation, setTranslation] = useState(
    "Press the word for translation..."
  );
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isStartSpeak, setIsStartSpeak] = useState(false);
  const getRandomPage = (min, max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  };
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  // eslint-disable-next-line no-undef
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "en-GB";
  const shuffleWords = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const handleClickWord = (e) => {
    const imageData = e.target.dataset.image;
    const audioData = e.target.dataset.audio;
    const imageURL = `${databaseURL}${githubUser}${imageData.replace(
      "files/",
      ""
    )}`;
    const audioURL = `${databaseURL}${githubUser}${audioData.replace(
      "files/",
      ""
    )}`;
    if (mainImage !== imageURL) {
      setMainImage(imageURL);
      setTranslation(e.target.dataset.translation);
    }
    const audio = document.querySelector(".audio");
    audio.src = audioURL;
    audio.autoplay = true;
  };

  const handleClickReset = () => {
    setMainImage(MainImage);
    setTranslation("Press the word for translation...");
    setScoreGame("Press \"Start speak\" to start game...");
    const page = getRandomPage(0, 29);
    const getWords = async () => {
      setIsLoading(true);
      const fetchData = getDataSpeakIt(level, page);
      const newWords = await fetchData();
      setWords(shuffleWords(newWords).slice(0, 10));
      setIsLoading(false);
    };
    getWords();
  };

  const handleStartGame = () => {
    setIsStartSpeak(true);
    classesCard.push("speak-it-disabled-element");
    setTranslation("Press \"Record speech\"...");
  };

  const handleClickStopGame = () => {
    setIsStartSpeak(false);
    const wordsContainer = document.querySelector(".speak-it-words-container");
    const rightAnswers = [];
    const wrongAnswers = [];
    wordsContainer.childNodes.forEach((item) => {
      item.classList.remove("speak-it-disabled-element");
      if (item.classList.contains("speak-it-correct-answer")) {
        const rightObject = {};
        rightObject.word = item.dataset.word;
        rightObject.audio = item.dataset.audio;
        rightObject.translation = item.dataset.translation;
        rightAnswers.push(rightObject);
      } else {
        const wrongObject = {};
        wrongObject.word = item.dataset.word;
        wrongObject.audio = item.dataset.audio;
        wrongObject.translation = item.dataset.translation;
        wrongAnswers.push(wrongObject);
      }
      item.classList.remove("speak-it-correct-answer");
    });
    setScoreGame("Press \"Start speak\" to start game...");
    setTranslation("Press the word for translation...");
    setMainImage(MainImage);
    setResultsRightGame(rightAnswers);
    setResultsWrongGame(wrongAnswers);
    setShow(true);
  };

  const handleClickPauseHelp = () => {
    const wordsContainer = document.querySelector(".speak-it-words-container");
    wordsContainer.childNodes.forEach((item) => {
      item.classList.remove("speak-it-disabled-element");
    });
  };

  const handleClickRecordSpeech = () => {
    setVariantRecord("danger");
    const wordsContainer = document.querySelector(".speak-it-words-container");
    wordsContainer.childNodes.forEach((item) => {
      item.classList.add("speak-it-disabled-element");
    });
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")
        .toLowerCase();
      if (event.results[0].isFinal) {
        setTranslation(transcript);
        wordsContainer.childNodes.forEach((item) => {
          if (item.dataset.word.toLowerCase() === transcript) {
            const imageData = item.dataset.image;
            const imageURL = `${databaseURL}${githubUser}${imageData.replace(
              "files/",
              ""
            )}`;
            item.classList.add("speak-it-correct-answer");
            setMainImage(imageURL);
          }
        });
        let score = 0;
        wordsContainer.childNodes.forEach((item) => {
          if (item.classList.contains("speak-it-correct-answer")) {
            score += 1;
          }
        });
        localStorage.setItem("score", score);
        setScoreGame(`Score: ${localStorage.getItem("score")}`);
        if (score === 10) {
          handleClickStopGame();
        }
      }
    };
    recognition.onend = () => {
      recognition.stop();
      setVariantRecord("primary");
    };
  };

  const handleClickResetRightAnswers = () => {
    const wordsContainer = document.querySelector(".speak-it-words-container");
    wordsContainer.childNodes.forEach((item) => {
      item.classList.remove("speak-it-correct-answer");
      item.classList.add("speak-it-disabled-element");
    });
  };

  const handleChangeStartGame = () => {
    setStartGame(false);
  };

  const handleCLickAnswers = (e) => {
    const audioData = e.target.dataset.audio;
    const audioURL = `${databaseURL}${githubUser}${audioData.replace(
      "files/",
      ""
    )}`;
    const audio = document.querySelector(".audio");
    audio.src = audioURL;
    audio.autoplay = true;
  };

  useEffect(() => {
    const page = getRandomPage(0, 29);
    const getWords = async () => {
      const fetchData = getDataSpeakIt(level, page);
      const newWords = await fetchData();
      setWords(shuffleWords(newWords).slice(0, 10));
      setIsLoading(false);
    };
    getWords();
  }, [level]);

  return (
    <div className="speak-it-game">
      <div className="speak-it-wrapper">
        <div className="speak-it-level">Level: {levelGame + 1}</div>
        <audio className="audio">
          <track kind="captions" />
        </audio>
        <div className="speak-it-score-game">{scoreGame}</div>
        <div className="speak-it-image-container">
          <Image className="speak-it-image" src={mainImage} />
        </div>
        <div className="speak-it-word-translation">{translation}</div>
        {isLoading ? (
          <div className="speak-it-loading-spinner">
            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          <>
            <div className="speak-it-words-container">
              {words.map((item) => (
                <Card
                  key={item.word}
                  data-word={item.word}
                  data-audio={item.audio}
                  data-image={item.image}
                  data-translation={item.wordTranslate}
                  onClick={handleClickWord}
                  className={classesCard}
                >
                  <Image
                    className="speak-it-word-block-play"
                    src={PlayImage}
                    data-audio={item.audio}
                    data-image={item.image}
                    data-translation={item.wordTranslate}
                    alt="Play"
                  />
                  <div
                    className="speak-it-word-block-word"
                    data-audio={item.audio}
                    data-image={item.image}
                    data-translation={item.wordTranslate}
                  >
                    {item.word}
                  </div>
                  <div
                    className="speak-it-word-block-transcription"
                    data-audio={item.audio}
                    data-image={item.image}
                    data-translation={item.wordTranslate}
                  >
                    {item.transcription}
                  </div>
                </Card>
              ))}
            </div>
            {isStartSpeak ? (
              <div className="speak-it-control-buttons-game">
                <Button
                  className="speak-it-button-stop-game"
                  onClick={handleClickStopGame}
                >
                  Stop Game
                </Button>
                <Button
                  className={classesRecord}
                  variant={variantRecord}
                  onClick={handleClickRecordSpeech}
                >
                  Record speech
                </Button>
                <Button
                  className="speak-it-button-pause-game"
                  onClick={handleClickPauseHelp}
                >
                  Pause for help
                </Button>
                <Button
                  className="speak-it-button-results-game"
                  onClick={handleClickResetRightAnswers}
                >
                  Reset
                </Button>
              </div>
            ) : (
              <div className="speak-it-control-buttons">
                <Button
                  className="speak-it-button-new-words"
                  onClick={handleClickReset}
                >
                  New words
                </Button>
                <Button
                  className="speak-it-button-start-game"
                  onClick={handleStartGame}
                >
                  Start speak
                </Button>
                <Button
                  className="speak-it-button-results"
                  onClick={handleShow}
                >
                  Results
                </Button>
              </div>
            )}
          </>
        )}

        <Modal
          show={show}
          onHide={handleClose}
          className="speak-it-modal-results"
        >
          <Modal.Header closeButton>
            <Modal.Title>Results Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="speak-it-right-answers">
              Right Answers: {resultsRightGame.length}
            </div>
            <div>
              {resultsRightGame.map((item) => (
                <Card
                  key={item.word}
                  className="speak-it-card-answers"
                  onClick={handleCLickAnswers}
                  data-audio={item.audio}
                >
                  <Card.Text data-audio={item.audio}>
                    {item.word} - {item.translation}
                  </Card.Text>
                </Card>
              ))}
            </div>
            <div className="speak-it-wrong-answers">
              Wrong Answers: {resultsWrongGame.length}
            </div>
            <div>
              <div>
                {resultsWrongGame.map((item) => (
                  <Card
                    key={item.word}
                    className="speak-it-card-answers"
                    onClick={handleCLickAnswers}
                    data-audio={item.audio}
                  >
                    <Card.Text data-audio={item.audio}>
                      {item.word} - {item.translation}
                    </Card.Text>
                  </Card>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleChangeStartGame}>Change level</Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default GameSpeakIt;
