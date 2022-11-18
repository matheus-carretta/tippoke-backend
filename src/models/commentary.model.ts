import { ICommentary } from "../interfaces";

export default class CommentaryModel {
  async add(commentary: ICommentary): Promise<ICommentary> {

    return commentary;
  }
}