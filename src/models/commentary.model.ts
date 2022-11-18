import { PrismaClient, Prisma } from '@prisma/client';
import { ICommentary, ICommentaryModel, IQueryData } from "../interfaces";

export default class CommentaryModel implements ICommentaryModel {
  prisma = new PrismaClient();

  async add(data: ICommentary): Promise<ICommentary> {
    const newCommentary = this.prisma.commentary.create({
      data: data as Prisma.CommentaryUncheckedCreateInput
    });

    return newCommentary;
  }

  async get(queryData: IQueryData): Promise<ICommentary[]> {
    console.log(queryData)
    const commentaries = this.prisma.commentary.findMany({
      skip: queryData.page * 2,
      where: { pokemonName: { contains: queryData.pokemonName }}
    });

    return commentaries;
  }
}