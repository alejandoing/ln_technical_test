import React from "react";

import styles from "./styles/Article.module.css";
import { formatDate } from "../utils";

const Article = (props) => {
  const { image, title, date } = props;

  return (
    <article className={`${styles.mod_caja_nota} w-100-mobile`}>
      <section className={styles.cont_figure}>
        <a href='' className={styles.figure}>
          <picture id='' className={`${styles.content_pic} ${styles.picture}`}>
            <img src={image} alt='' className={styles.content_img} />
          </picture>
        </a>
      </section>
      <div className={styles.mod_caja_nota__descrip}>
        <h2 className={styles.com_title_acu}>
          <a href=''>{title}</a>
        </h2>
        <h4 className={styles.com_date}>{formatDate(date)}</h4>
      </div>
    </article>
  );
};

export default Article;
