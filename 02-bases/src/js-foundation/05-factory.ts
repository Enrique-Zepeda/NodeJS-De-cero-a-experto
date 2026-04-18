// const { getUUID, getAge } = require("../../plugins");
interface BuildPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}
interface PersonOptions {
  name: string;
  birthdate: string;
}

interface Person {
  id: string;
  name: string;
  birthdate: string;
  age: number;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildPersonOptions) => {
  // Retornamos una función que crea a la persona
  return ({ name, birthdate }: PersonOptions): Person => {
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
