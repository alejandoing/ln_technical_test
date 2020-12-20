import Head from "next/head";

import Header from "./Header";
import BannerTop from "./BannerTop";
import Title from "./Title";
import TagsBanner from "./TagsBanner";
import ArticleList from "./ArticleList";

import styles from "../styles/index.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>La Nación Test Técnico - SSR</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <BannerTop />
        <div className={styles.lay_sidebar}>
          <div className={styles.sidebar__main}>
            <Title />
            <TagsBanner />
            <ArticleList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
