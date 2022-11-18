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
  get(queryData: IQueryData): Promise<ICommentary[]>
}

export interface ICommentaryModel {
  add(commentary: ICommentary): Promise<ICommentary>,
  get(queryData: IQueryData): Promise<ICommentary[]>
}

export interface IQueryData {
  pokemonName: string,
  page: number | undefined,
  limit: number | undefined
}