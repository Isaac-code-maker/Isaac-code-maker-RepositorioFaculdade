import { Request, Response } from 'express';
import VideoModel from '../models/VideoModel';

class VideoController {
  async create(req: Request, res: Response) {
    const { title, description, incorporationLink, link } = req.body;
    const video = await VideoModel.create({ title, description, incorporationLink, link });
    return res.json(video);
  }

  async list(req: Request, res: Response) {
    const videos = await VideoModel.findAll();
    return res.json(videos);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const video = await VideoModel.findById(Number(id));
    return res.json(video);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, incorporationLink, link } = req.body;
    const video = await VideoModel.update(Number(id), { title, description, incorporationLink, link });
    return res.json(video);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await VideoModel.delete(Number(id));
    return res.sendStatus(204);
  }
}

export default new VideoController();
