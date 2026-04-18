const { buildMakePerson } = require("../js-foundation/05-factory");
const { getAge, getUUID } = require("../../plugins");

// 1. Creamos la "fábrica" inyectando las herramientas (plugins)
const makePerson = buildMakePerson({ getUUID, getAge });

// 2. Usamos la fábrica para crear personas
const kike = makePerson({ name: "Kike", birthdate: "2002-07-13" });

console.log({ kike });
