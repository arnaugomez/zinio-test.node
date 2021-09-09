import { Article } from "../../domain/Article";
import { JsonArticle } from "../models/JsonArticle";

export const toArticleDomain = ({
  body,
  id,
  title,
  authors,
}: JsonArticle): Article => ({
  body,
  id,
  title,
  authors,
});
