import { ICommentary, ICommentaryService, IQueryData } from "../interfaces";
import { Request, Response } from 'express';

export default class CommentaryController {
  constructor(private model: ICommentaryService) {
    this.model = model;
  }

  async add(req: Request & { body: ICommentary }, res: Response): Promise<ICommentary> {
    const commentary = await this.model.add({ ...req.body });

    return res.status(200).json(commentary) as unknown as ICommentary;
  }

  async get(req: Request, res: Response): Promise<ICommentary[]> {
    const { pokemonName, page } = req.query;

    const queryData = {
      pokemonName: !pokemonName ? '' : pokemonName,
      page: !page ? 0 : Number(page)
    }

    const commentary = await this.model.get(queryData as IQueryData);

    return res.status(200).json(commentary) as unknown as ICommentary[];
  }
}