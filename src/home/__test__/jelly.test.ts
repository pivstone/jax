import { resolveClass } from "../..";
import { JellyHome } from "../jelly";


describe("Jelly Cat Test Case", () => {
  test("should woof", () => {
    const j = resolveClass<JellyHome>(JellyHome.name);
    expect(j.pet?.meow()).toBe("blue: Wateeeer!");
  });
});
