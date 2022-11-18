export interface ICommentary {
  id?: number,
  username: string,
  email: string,
  description: string,
  pokemonName: string,
  pokemonImage?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export interface ICommentaryService {
  add(commentary: ICommentary): Promise<ICommentary>
}

export interface ICommentaryModel {
  add(commentary: ICommentary): Promise<ICommentary>
}