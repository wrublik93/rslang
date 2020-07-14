import React, { useState, useCallback, useEffect, useRef } from "react";
import timeConverter from "pages/OurCustomGame/components/Timer/timerConverter";
import "pages/OurCustomGame/components/Timer/style.scss";

function Timer({ gameIsOver, words }) {
  const [time, setTime] = useState(0);
  const timerId = useRef(null);

  const startTimer = useCallback(() => {
    timerId.current = setInterval(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  const stopTimer = useCallback(() => {
    clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (gameIsOver) {
      stopTimer();
    } else {
      startTimer();
    }
    return () => {
      stopTimer();
    };
  }, [startTimer, stopTimer, gameIsOver]);

  useEffect(() => {
    setTime(0);
  }, [words]);

  const renderTimeIsOver = () => {
    stopTimer();
    return <div className="timer-container-timeIsOver">Time is over</div>;
  };

  const minutes = Math.floor(time / 60);

  return (
    <div className="timer-container">
      {minutes >= 60 ? renderTimeIsOver() : timeConverter(time)}
    </div>
  );
}

export default Timer;
