jest.mock("uuid", () => ({
  v4: () => "ab16e731-6cee-424d-81a0-5929e9bdb0cc", // Un UUID de mentira para el test
}));

import { getUUID } from "../../src/plugins/get-id.plugin";

describe("plugins/get-id.plugin", () => {
  test("getUUID() should return UUID", () => {
    const uuid = getUUID();
    console.log(uuid);
    expect(typeof uuid).toBe("string");
    expect(uuid).toHaveLength(36);
    expect(uuid).toMatch(/[0-9A-Za-z]{8}-[0-9A-Za-z]{4}-4[0-9A-Za-z]{3}-[89ABab][0-9A-Za-z]{3}-[0-9A-Za-z]{12}/g);
  });
});
