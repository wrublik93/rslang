import React, { useState, useEffect } from "react";
import "pages/Savanna/style.scss";
import Intro from "pages/Savanna/components/Intro";
import HeaderSavanna from "pages/Savanna/components/HeaderSavanna";
import Game from "pages/Savanna/components/game/Game";
import Results from "pages/Savanna/components/result/Results";
import WindowModal from "pages/Savanna/components/WindowModal";
import CountDown from "pages/Savanna/components/CountDown";
import Loading from "pages/Savanna/components/Loading";

const Savanna = () => {
  const [gameState, setGameState] = useState("introSavanna");
  const [modalWindowVisible, setModalWindowVisible] = useState(false);
  const [timerState, setTimerState] = useState(3);
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const [soundState, setSoundState] = useState(true);
  const [starVisible, setStarVisible] = useState(false);
  const [numberOfStars, setNumberOfStars] = useState(5);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [levelWord, setLevelWord] = useState(5);
  const [arrCurentWord, setArrCurentWord] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("soundState", soundState);
  }, [soundState]);

  useEffect(() => {
    window.localStorage.setItem("soundState", true);
  }, []);

  return (
    <div className="savanna">
      <div className="text-center">
        {spinnerVisible && <Loading setSpinnerVisible={setSpinnerVisible} />}
      </div>
      {!spinnerVisible && (
        <div className="wrapper">
          <HeaderSavanna
            setModalWindowVisible={setModalWindowVisible}
            setSoundState={setSoundState}
            soundState={soundState}
            starVisible={starVisible}
            numberOfStars={numberOfStars}
          />
          <div className="main-savanna__container">
            {gameState === "introSavanna" && (
              <Intro setGameState={setGameState} setLevelWord={setLevelWord} />
            )}
            {gameState === "countDownSavanna" && (
              <CountDown
                setGameState={setGameState}
                timerState={timerState}
                setTimerState={setTimerState}
                soundState={soundState}
                levelWord={levelWord}
                setArrCurentWord={setArrCurentWord}
              />
            )}
            {gameState === "gameSavanna" && (
              <Game
                setGameState={setGameState}
                setStarVisible={setStarVisible}
                numberOfStars={numberOfStars}
                setNumberOfStars={setNumberOfStars}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                wrongAnswer={wrongAnswer}
                setWrongAnswer={setWrongAnswer}
                soundState={soundState}
                arrCurentWord={arrCurentWord}
              />
            )}
            {gameState === "resultSavanna" && (
              <Results
                setGameState={setGameState}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                wrongAnswer={wrongAnswer}
                setWrongAnswer={setWrongAnswer}
                setStarVisible={setStarVisible}
                soundState={soundState}
              />
            )}
          </div>
          {modalWindowVisible && (
            <WindowModal setModalWindowVisible={setModalWindowVisible} />
          )}
        </div>
      )}
    </div>
  );
};

export default Savanna;
