// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { buildMakePerson } = require("./js-foundation/05-factory");
// const { getAge, getUUID } = require("../plugins");
const getPokemonById = require("./js-foundation/06-promises");

// console.log(emailTemplate);
// const id = 1;
// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user);
// });

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {
//   name: "Kike",
//   birthdate: "2002-07-13",
// };

// const john = makePerson(obj);
// console.log({ john });
getPokemonById(1)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.error(err))
  .finally(() => console.log("se logro"));
