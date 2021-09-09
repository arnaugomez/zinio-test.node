import { Router } from "express";
import {
  getArticleById,
  getArticles,
  searchArticles,
} from "../data/articleRepository";

const articleRouter = Router();

articleRouter.get("/", (req, res) => {
  const searchText = req.query.q;
  if (typeof searchText === "string") {
    res.send(searchArticles(searchText));
  } else {
    res.send(getArticles());
  }
});

articleRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id === undefined) {
    res.status(400).send({
      error: "Id must be a number",
    });
  } else {
    const article = getArticleById(id);
    if (!article) {
      res.status(400).send({
        message: `Article with id ${id} does not exist`,
      });
    }
    res.send(article);
  }
});

export default articleRouter;
