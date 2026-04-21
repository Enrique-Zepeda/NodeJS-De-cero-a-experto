import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory", () => {
  const getUUID = () => "122342";
  const getAge = () => 23;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: "John Doe", birthdate: "2002-07-13" });
    expect(johnDoe).toEqual({ id: "122342", name: "John Doe", birthdate: "2002-07-13", age: 23 });
  });
});
