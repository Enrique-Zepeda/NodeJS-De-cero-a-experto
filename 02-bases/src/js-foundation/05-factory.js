// const { getUUID, getAge } = require("../../plugins");

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

const obj = {
  name: "Kike",
  birthdate: "2002-07-13",
};

// const john = buildPerson(obj);
// console.log(john);

module.exports = {
  buildMakePerson,
};
