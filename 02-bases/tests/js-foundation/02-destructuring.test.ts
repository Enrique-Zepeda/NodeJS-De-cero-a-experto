import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring", () => {
  test("characters should contain flash,superman", () => {
    // console.log(characters); //los muestra
    expect(characters).toContain("flash");
    expect(characters).toContain("superman");
  });

  test("first characters should be flash and second superman", () => {
    const [flahs, superman] = characters;
    expect(flahs).toBe("flash");
    expect(superman).toBe("superman");
  });
});
