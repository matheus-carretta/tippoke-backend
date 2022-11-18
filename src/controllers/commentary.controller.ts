import { ICommentary, ICommentaryService } from "../interfaces";
import { Request, Response } from 'express';

export default class CommentaryController {
  constructor(private model: ICommentaryService) {
    this.model = model;
  }

  async add(req: Request & { body: ICommentary }, res: Response): Promise<ICommentary> {
    const commentary = await this.model.add({ ...req.body });

    return res.status(200).json(commentary) as unknown as ICommentary;
  }
}