export interface ICommentary {
  id?: number,
  username: string,
  email: string,
  description: string,
  pokemonName: string,
  pokemonImage?: string,
  createdAt?: string,
  updatedAt?: string,
}

export interface ICommentaryService {
  add(commentary: ICommentary): Promise<ICommentary>
}

export interface ICommentaryModel {
  add(commentary: ICommentary): Promise<ICommentary>
}