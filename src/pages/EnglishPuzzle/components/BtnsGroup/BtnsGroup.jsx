import React from "react";
import { Button } from "react-bootstrap";

function BtnsGroup({ isCorrect, check, know, continueGame }) {
  return (
    <>
      {isCorrect ? (
        <Button variant="outline-danger" onClick={continueGame}>
          Continue
        </Button>
      ) : (
        <div>
          <Button variant="outline-danger" onClick={check}>
            Check
          </Button>
          <Button variant="outline-info" onClick={know}>
            I don`t know
          </Button>
        </div>
      )}
    </>
  );
}

export default React.memo(BtnsGroup);
