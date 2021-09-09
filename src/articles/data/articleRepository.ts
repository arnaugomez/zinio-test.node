import Fuse from "fuse.js";

import { Article } from "../domain/Article";
import { ArticleWithContext } from "../domain/ArticleWithContext";
import { getArticlesData } from "./json/getArticlesData";
import { toArticleDomain } from "./transformers/toArticleDomain";

export function getArticleById(id: number): ArticleWithContext | null {
  const { data } = getArticlesData();
  const articleIndex = data.findIndex((a) => a.id === id);
  if (articleIndex === -1) {
    return null;
  }
  return {
    article: toArticleDomain(data[articleIndex]),
    previous: data[articleIndex - 1]?.id,
    next: data[articleIndex + 1]?.id,
  };
}

export function getArticles(): Article[] {
  const { data } = getArticlesData();
  return data.map(toArticleDomain);
}

/** Searching is an expensive operation so we cache the search results */
const searches = new Map<string, Article[]>();

export function searchArticles(text: string): Article[] {
  if (searches.get(text)) {
    return searches.get(text) as Article[];
  }
  const articles = getArticles();
  const fuse = new Fuse(articles, {
    keys: [{ name: "title", weight: 2 }, "body", "authors"],
  });
  const searchResults = fuse.search(text).map((r) => r.item);

  searches.set(text, searchResults);
  return searchResults;
}
