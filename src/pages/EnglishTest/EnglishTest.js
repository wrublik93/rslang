import React, { useState, useEffect } from "react";
import Test from "pages/EnglishTest/components/Test";
import StartTest from "pages/EnglishTest/components/StartTest";
import EndTest from "pages/EnglishTest/components/EndTest";
import "pages/EnglishTest/style.scss";

const EnglishTest = ({ setUserLevel, userLevel }) => {
  const [rightAnswer, setRightAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [startTest, setStartTest] = useState(false);
  const [endTest, setEndTest] = useState(false);
  const [resultTest, setResultTest] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    setResultTest(rightAnswer.length);
  }, [rightAnswer]);

  return (
    <div className="english-test">
      {!startTest && !endTest && (
        <StartTest setStartTest={setStartTest} userLevel={userLevel} />
      )}
      {startTest && !endTest && (
        <Test
          setRightAnswer={(word) => setRightAnswer([...rightAnswer, word])}
          setWrongAnswer={(word) => setWrongAnswer([...wrongAnswer, word])}
          startTest={startTest}
          setEndTest={setEndTest}
          setResultTest={setResultTest}
        />
      )}
      {startTest && endTest && (
        <EndTest
          resultTest={resultTest}
          setStartTest={setStartTest}
          setEndTest={setEndTest}
          setLevel={setLevel}
          level={level}
          setUserLevel={setUserLevel}
          rightAnswer={rightAnswer}
          wrongAnswer={wrongAnswer}
        />
      )}
    </div>
  );
};

export default EnglishTest;
