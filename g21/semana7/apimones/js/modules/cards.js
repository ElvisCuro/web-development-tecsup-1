import { renderPokemonCard } from "../../utils/util.js";

const cards = () => {
  const pokemonLocal = document.getElementById('pokemonLocal');
  const pokemonRemote = document.getElementById('pokemonRemote');

  const readPokemon = async () => {
    const response = await fetch('https://elliotgaramendi.github.io/web-development-tecsup/g21/semana7/apimones/json/pokeapi-api-v2-pokemon-25.json');
    const pokemon = await response.json();
    renderPokemonCard(pokemonLocal, pokemon);
  };

  const readPokemon2 = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemon = await response.json();
    renderPokemonCard(pokemonRemote, pokemon);
  };

  readPokemon();
  readPokemon2();
};

export default cards;