import React, { useState, useEffect } from "react";
import Test from "pages/EnglishTest/components/Test";
import StartTest from "pages/EnglishTest/components/StartTest";
import EndTest from "pages/EnglishTest/components/EndTest";
import "pages/EnglishTest/style.scss";

const EnglishTest = () => {
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
      <div className="level">level : {level + 1}</div>
      {!startTest && !endTest && <StartTest setStartTest={setStartTest} />}
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
          rightAnswer={rightAnswer}
          wrongAnswer={wrongAnswer}
          setStartTest={setStartTest}
          setEndTest={setEndTest}
          setLevel={setLevel}
        />
      )}
    </div>
  );
};

export default EnglishTest;
