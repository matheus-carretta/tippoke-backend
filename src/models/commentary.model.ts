import { PrismaClient, Prisma } from '@prisma/client';
import { ICommentary, ICommentaryModel } from "../interfaces";

export default class CommentaryModel implements ICommentaryModel {
  prisma = new PrismaClient();

  async add(data: ICommentary): Promise<ICommentary> {
    const newCommentary = this.prisma.commentary.create({
      data: data as Prisma.CommentaryUncheckedCreateInput
    });

    return newCommentary;
  }

  async get(): Promise<ICommentary[]> {
    const commentaries = this.prisma.commentary.findMany();

    return commentaries;
  }
}