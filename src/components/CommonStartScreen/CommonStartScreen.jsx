import React from "react";
import { Button } from "react-bootstrap";
import "components/CommonStartScreen/style.scss";

function CommonStartScreen({ title, children, onStartClick }) {
  return (
    <div className="startScreen">
      <div className="startScreen-title">{title}</div>
      {children}
      <Button variant="outline-primary" onClick={onStartClick}>
        START
      </Button>
    </div>
  );
}

export default React.memo(CommonStartScreen);
