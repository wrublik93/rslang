import React from "react";
import classNames from "classnames";

import "components/Logo/style.scss";

import logo from "assets/logo.svg";

const Logo = (props) => {
  const { className } = props;
  return <img className={classNames(className)} src={logo} alt="Logotype" />;
};

export default Logo;
