import axios from 'axios';

export default async function getPokemonImage(pokemonName: string){
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    return response.data.sprites.other["official-artwork"].front_default;
  } catch (error) {
    console.error(error);
  }
}