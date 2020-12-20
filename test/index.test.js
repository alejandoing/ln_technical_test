const { getArticles, getTags } = require("../redux/getters");
const toBeType = require("jest-tobetype");

expect.extend(toBeType);

test("Get only articles with subtype 7", async () => {
  const articles = await getArticles();
  expect(articles).toEqual(
    expect.arrayContaining([expect.objectContaining({ subtype: "7" })])
  );
});

test("Get 10 tags from articles", async () => {
  const articles = await getArticles();
  const tags = getTags(articles);

  expect(tags).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        tag: expect.toBeType("string"),
        slug: expect.toBeType("string"),
      }),
    ])
  );

  expect(tags).toHaveLength(10);
});
