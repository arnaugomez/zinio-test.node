import { JsonArticlesData } from "../models/JsonArticlesData";

export function fixArticleBodyImages(articlesData: JsonArticlesData): JsonArticlesData {
  return {
    ...articlesData,
    data: articlesData.data.map((article) => ({
      ...article,
      body: article.body.replaceAll('<img src=\"', "<img src=\"https://cdn2.audiencemedia.com/")
    })),
  }
}