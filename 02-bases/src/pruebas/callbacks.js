const { getUserById } = require("../js-foundation/03-callbacks");

const id = 1;

getUserById(id, (error, user) => {
  if (error) return console.error(error); // Manejo de error
  console.log("Usuario encontrado:", user);
});
