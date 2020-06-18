import React from "react";
import classNames from "classnames";

import "components/Image/style.scss";

const Image = (props) => {
  const { className, src, alt } = props;
  return <img className={classNames("image", className)} src={src} alt={alt} />;
};

export default Image;
