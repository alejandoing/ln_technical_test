import React from "react";

import styles from "./styles/Button.module.css";
import classNames from "classnames";

const Button = (props) => {
  const { children, highlight, secondary, styleName } = props;

  const btnClass = classNames({
    [styles.Button]: true,
    [styleName]: true,
    [styles.Button__hightlight]: highlight,
    [styles.Button__secondary]: secondary,
  });

  return (
    <React.Fragment>
      <button className={btnClass}>{children}</button>
    </React.Fragment>
  );
};

export default Button;
