import React, { useState } from "react";
import StartGameAudio from "pages/AudioChallenge/Components/StartGame";
import GameAudioChallenge from "pages/AudioChallenge/Components/GameAudioCall";
// eslint-disable-next-line max-len
import GameOverAudioCall from "pages/AudioChallenge/Components/EndAudioChallenge";
import "pages/AudioChallenge/style.scss";

const AudioChallenge = () => {
  const [startGamePages, setstartGamePages] = useState(false);
  const [endGamePages, setendGamePages] = useState(false);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [resultScore, setResultScore] = useState(0);
  const [level, setLevel] = useState(0);

  return (
    <>
      <div className="audio-challenge">
        <div className="App">
          <div className="App-header">
            {!startGamePages && !endGamePages && (
              <StartGameAudio
                setstartGamePages={setstartGamePages}
                setLevel={setLevel}
              />
            )}

            {startGamePages && !endGamePages && (
              <GameAudioChallenge
                level={level}
                startGamePages={startGamePages}
                setRightAnswers={(word) =>
                  setRightAnswers([...rightAnswers, word])
                }
                setWrongAnswers={(word) =>
                  setWrongAnswers([...wrongAnswers, word])
                }
                setendGamePages={setendGamePages}
                setResultScore={setResultScore}
              />
            )}

            {startGamePages && endGamePages && (
              <GameOverAudioCall
                resultScore={resultScore}
                rightAnswers={rightAnswers}
                wrongAnswers={wrongAnswers}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioChallenge;
