import { Profile, resolveClass } from "../..";
import { Bean } from "../..";
import { Cat } from "../../cat";
import { JellyHome } from "../jelly";

@Bean("Jellycat")
@Profile("test")
class Husky implements Cat {
  meow() {
    return "wooof";
  }
}

describe("Fake Cat Test Case", () => {
  test("should woof", () => {
    const j = resolveClass<JellyHome>(JellyHome.name);
    expect(j.pet?.meow()).toBe("wooof");
  });
});
