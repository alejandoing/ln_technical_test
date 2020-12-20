import Home from "../components/Home";
import { initializeStore } from "../redux/store";

import { getArticles, getTags } from "../redux/getters";

export default function Index() {
  return <Home />;
}

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const articles = await getArticles();
  dispatch({ type: "GET_ARTICLES", payload: articles });

  const tags = getTags(articles);
  dispatch({ type: "GET_TAGS", payload: tags });

  return { props: { initialReduxState: reduxStore.getState() } };
};
