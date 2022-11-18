import { PrismaClient, Prisma } from '@prisma/client';
import { ICommentary } from "../interfaces";

export default class CommentaryModel {
  prisma = new PrismaClient();

  async add(data: ICommentary): Promise<ICommentary> {
    const newCommentary = this.prisma.commentary.create({
      data: data as Prisma.CommentaryUncheckedCreateInput
    });
    
    return newCommentary;
  }
}