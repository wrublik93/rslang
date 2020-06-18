import React from "react";
import classNames from "classnames";

import "components/Container/style.scss";

function Container(props) {
  const {
    size,
    direction,
    justify,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    children,
  } = props;
  return (
    <div
      className={classNames(
        size,
        direction,
        justify,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      )}
    >
      {children}
    </div>
  );
}

export default Container;
