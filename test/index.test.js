const { getArticles, getTags } = require("../redux/getters");
const { formatDate } = require("../utils");


const toBeType = require("jest-tobetype");
const axios = require("axios");

const { subtype, taxonomy } = require("./mocks");

jest.mock("axios");
expect.extend(toBeType);

test("Get only articles with subtype 7", async () => {
  axios.get.mockResolvedValue(subtype);

  const articles = await getArticles();

  expect(articles).toEqual(
    expect.arrayContaining([expect.objectContaining({ subtype: "7" })])
  );
});

test("Get top 10 tags from articles", async () => {
  const articles = taxonomy;
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

test("Get spanish date format", async () => {
  const date = "2019-10-30T00:00";
  const formatted = formatDate(date);

  expect(formatted).toBe("30 de octubre de 2019");
});
