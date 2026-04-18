const getPokemonById = require("../js-foundation/06-promises");

getPokemonById(1)
  .then((pokemon) => console.log(`El pokemon es: ${pokemon}`))
  .catch((err) => console.error("Error al obtener pokemon", err))
  .finally(() => console.log("Petición finalizada"));
