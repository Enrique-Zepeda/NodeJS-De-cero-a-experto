// const getPokemonById = (id) => {
//   const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   return fetch(URL)
//     .then((resp) => resp.json())
//     .then((pokemon) => pokemon.name);
// };
const { httpClientPlugin } = require("../../plugins");

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClientPlugin.get(url);
  return pokemon.name;
};

module.exports = getPokemonById;
