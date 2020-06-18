import React from "react";
import "components/Main/style.scss";

const Main = (props) => {
  const { children } = props;
  return <main className="main">{children}</main>;
};

export default Main;
