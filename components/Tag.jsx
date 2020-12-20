import React from "react";

import styles from "./styles/Tag.module.css";

export default function Tag(props) {
  return (
    <a href={`tema/${props.slug}`} className={styles.Tag}>
      {props.title}
    </a>
  );
}
