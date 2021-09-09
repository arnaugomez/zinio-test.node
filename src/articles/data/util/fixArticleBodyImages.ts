import { JsonArticlesData } from "../models/JsonArticlesData";

export function fixArticleBodyImages(
  articlesData: JsonArticlesData
): JsonArticlesData {
  return {
    ...articlesData,
    data: articlesData.data.map((article) => {
      return {
        ...article,
        body: article?.body.replace(
          /<img src="/g,
          '<img src="https://cdn2.audiencemedia.com'
        ),
      };
    }),
  };
}
