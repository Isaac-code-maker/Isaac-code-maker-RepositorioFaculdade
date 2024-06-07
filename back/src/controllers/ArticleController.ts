import { Request, Response } from 'express';
import ArticleModel from '../models/ArticleModel';

class ArticleController {
  async create(req: Request, res: Response) {
    const { title, description, link } = req.body;
    const article = await ArticleModel.create({ title, description, link });
    return res.json(article);
  }

  async list(req: Request, res: Response) {
    const articles = await ArticleModel.findAll();
    return res.json(articles);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const article = await ArticleModel.findById(Number(id));
    return res.json(article);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, link } = req.body;
    const article = await ArticleModel.update(Number(id), { title, description, link });
    return res.json(article);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await ArticleModel.delete(Number(id));
    return res.sendStatus(204);
  }
}

export default new ArticleController();
