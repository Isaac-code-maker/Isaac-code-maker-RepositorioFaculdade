import { Request, Response } from 'express';
import CommentModel from '../models/CommentModel';

class CommentController {
  async create(req: Request, res: Response) {
    const { name, email, comment } = req.body;
    const commentData = await CommentModel.create({ name, email, comment });
    return res.json(commentData);
  }

  async list(req: Request, res: Response) {
    const comments = await CommentModel.findAll();
    return res.json(comments);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const comment = await CommentModel.findById(Number(id));
    return res.json(comment);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, comment } = req.body;
    const updatedComment = await CommentModel.update(Number(id), { name, email, comment });
    return res.json(updatedComment);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await CommentModel.delete(Number(id));
    return res.sendStatus(204);
  }
}

export default new CommentController();
