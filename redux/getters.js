import {
  apiGet,
  mergeArr,
  mapByKey,
  sortByLength,
  groupArrDuplicate,
  findEqual,
} from "../utils";

export const getArticles = async () => {
  const { articles } = await apiGet(
    "https://api-test-ln.herokuapp.com/articles"
  );

  const filtered = articles.filter((x) => x.subtype === "7");
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
