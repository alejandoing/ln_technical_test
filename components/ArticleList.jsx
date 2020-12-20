import React from "react";

import Article from "./Article";
import styles from "./styles/ArticleList.module.css";

import { useSelector } from "react-redux";

const ArticleList = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <section className={`${styles.row_gap_deskxl_3} hlp-degrade`}>
      {articles.map((x, i) => (
        <Article
          key={i}
          title={x.headlines.basic}
          date={x.display_date}
          image={x.promo_items ? x.promo_items.basic.url : null}
        />
      ))}
    </section>
  );
};

export default ArticleList;
