import React from "react";

import styles from "./styles/BannerTop.module.css";

const BannerTop = () => {
  return (
    <div className={styles.BannerTop}>
      <div
        className={`${styles.BannerTop__top} ${styles.BannerTop__desktop}`}
      ></div>
    </div>
  );
};

export default BannerTop;
