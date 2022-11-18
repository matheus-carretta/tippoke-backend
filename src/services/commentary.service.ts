import { ICommentary, ICommentaryModel, ICommentaryService, IQueryData } from "../interfaces";
import getPokemonImage from "../utils/fetchPokemonImage";

export default class CommentaryService implements ICommentaryService {
  constructor(private model: ICommentaryModel) {
    this.model = model;
  }
 
  async add(commentary: ICommentary): Promise<ICommentary> {
    const pokemonImage = await getPokemonImage(commentary.pokemonName);
    
    commentary.pokemonImage = !pokemonImage ?
     "https://static.wikia.nocookie.net/bec6f033-936d-48c5-9c1e-7fb7207e28af/scale-to-width/755" :
     pokemonImage;

    const newCommentary = await this.model.add(commentary);

    return newCommentary;
  }

  async get(queryData: IQueryData): Promise<ICommentary[]> {
    const commentaries = await this.model.get(queryData);

    return commentaries;
  }
}