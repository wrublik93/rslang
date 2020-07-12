import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LinkButton({ link, children }) {
  return (
    <Link to={link}>
      <Button variant="info">{children}</Button>
    </Link>
  );
}

export default React.memo(LinkButton);
