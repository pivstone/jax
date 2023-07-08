import { resolveClass } from "../..";
import { JellyHandle } from "../jelly";

describe("Jelly Cat Test Case", () => {
  test("should woof", () => {
    const j = resolveClass<JellyHandle>(JellyHandle.name);
    expect(j.service?.process()).toBe("blue: Wateeeer!");
  });
});
