import { httpClientPlugin } from "../plugins";

// 1. Declaramos la función (la lógica)
export const getPokemonById = async (id: number | string): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClientPlugin.get(url);
  return pokemon.name;
};

// 2. Ejecutamos la función para probarla
// Creamos una función "runner" para mantener el orden que querías en app.ts
export const runPokemonTest = () => {
  getPokemonById(1)
    .then((name) => console.log(`El pokemon es: ${name}`))
    .catch((err) => console.error("Error al obtener pokemon", err))
    .finally(() => console.log("Petición finalizada"));
};
