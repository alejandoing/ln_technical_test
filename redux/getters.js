import {
  mergeArr,
  mapByKey,
  sortByLength,
  groupArrDuplicate,
  findEqual,
} from "../utils";

import axios from "axios";

export const getArticles = async () => {
  const response = await axios.get(
    "https://api-test-ln.herokuapp.com/articles"
  );

  const filtered = response.data.articles.filter((x) => x.subtype === "7");
  return filtered;
};

export const getTags = (articles) => {
  const taxonomy = mergeArr(articles.map((x) => x.taxonomy.tags));
  const onlyTags = mapByKey(taxonomy, "text");

  const sortedTags = sortByLength(groupArrDuplicate(onlyTags));
  const popularTags = sortedTags.splice(0, 10).map((x) => {
    const tag = x[0];
    const { slug } = findEqual(taxonomy, "text", tag);

    return { tag, slug };
  });

  return popularTags;
};
