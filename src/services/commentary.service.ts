import { ICommentary, ICommentaryModel, ICommentaryService } from "../interfaces";

export default class CommentaryService implements ICommentaryService {
  constructor(private model: ICommentaryModel) {
    this.model = model;
  }
 
  async add(commentary: ICommentary): Promise<ICommentary> {
    const newCommentary = await this.model.add(commentary);

    return newCommentary;
  }
}