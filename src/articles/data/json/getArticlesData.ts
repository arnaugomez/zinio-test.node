import fs from "fs";
import { JsonArticlesData } from "../models/JsonArticlesData";
import { fixArticleBodyImages } from "../util/fixArticleBodyImages";

/** Articles data is cached in this variable because reading a file is a costy operation. */ 
let articlesData: JsonArticlesData | null = null;

export function getArticlesData(): JsonArticlesData {
  if (!articlesData) {
    const articlesDataString = fs.readFileSync("./articles.json", "utf8");
    const rawArticlesData = JSON.parse(articlesDataString);
    articlesData = fixArticleBodyImages(rawArticlesData)
  }
  return articlesData as JsonArticlesData;
}
