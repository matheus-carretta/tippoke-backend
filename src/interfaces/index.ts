export interface ICommentary {
  id?: number,
  username: string,
  email: string,
  description: string,
  pokemonName: string,
  pokemonImage?: string,
  createdAt?: Date
}

export interface ICommentaryService {
  add(commentary: ICommentary): Promise<ICommentary>,
  get(): Promise<ICommentary[]>
}

export interface ICommentaryModel {
  add(commentary: ICommentary): Promise<ICommentary>,
  get(): Promise<ICommentary[]>
}