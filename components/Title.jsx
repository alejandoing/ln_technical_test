import React from "react";

import styles from "./styles/Title.module.css";

const Title = () => {
  return (
    <div className='row'>
      <div className={`${styles.com_titleWithfollow} hlp-marginBottom-15`}>
        <h1 className={`${styles.com_title_section_xl}`}>
          Test Técnico Grilla
        </h1>
      </div>
    </div>
  );
};

export default Title;
