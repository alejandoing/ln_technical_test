import Home from "../components/Home";
import { initializeStore } from "../redux/store";

import { getArticles, getTags } from "../redux/getters";
import { apiGet } from '../utils'

export default function Index() {
  return <Home />;
}

export const getServerSideProps = async () => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  //const fetchData = await apiGet("https://api-test-ln.herokuapp.com/articles");
  
  const articles = await getArticles();
  dispatch({ type: "GET_ARTICLES", payload: articles });

  const tags = getTags(articles);
  dispatch({ type: "GET_TAGS", payload: tags });

  return { props: { initialReduxState: reduxStore.getState() } };
};
