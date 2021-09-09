import { JsonImage } from "./JsonImage";

export interface JsonArticle {
  id: number;
  title: string;
  sub_title: string;
  tag: string;
  strap_line: string;
  intro: string;
  body: string;
  layout: {};
  relative_links: any[];
  schedule: string;
  link_source: string;
  competition: any[];
  flatplan_title: string;
  notes: string;
  gutter_credit: string;
  other: string;
  image: JsonImage[];
  related_objects: JsonArticleRelatedObjects;
  authors?: string[];
  preview: number;
  priority: number;
  starting_page: string;
  page_range: string;
  thumbnail?: string;
}

interface JsonArticleRelatedObjects {
  image: JsonImage[];
}