import React from "react";
import classNames from "classnames";

import "components/Logo/style.scss";

const Logo = (props) => {
  const { className } = props;
  const logo = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/HomePage/logo.png`;
  return <img className={classNames(className)} src={logo} alt="Logotype" />;
};

export default Logo;
