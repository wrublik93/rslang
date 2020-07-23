import React from "react";
import { Button } from "react-bootstrap";

function BtnsGroup({ isCorrect, check, know, continueGame }) {
  return (
    <>
      {isCorrect ? (
        <Button variant="danger" onClick={continueGame}>
          Continue
        </Button>
      ) : (
        <div>
          <Button variant="danger" onClick={check}>
            Check
          </Button>
          <Button variant="info" onClick={know}>
            I don`t know
          </Button>
        </div>
      )}
    </>
  );
}

export default React.memo(BtnsGroup);
