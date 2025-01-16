import axios from 'axios';

export const catchPokemon = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1');
  return response.data.results[0]; // Retorna o Pokémon aleatório
};