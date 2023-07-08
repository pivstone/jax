import { Profile, resolveClass } from "../..";
import { Bean } from "../..";
import { Service } from "../../services";
import { JellyHandle } from "../jelly";

@Bean("JellyService")
@Profile("test")
class Husky implements Service {
  process() {
    return "wooof";
  }
}

describe("Fake Cat Test Case", () => {
  test("should woof", () => {
    const j = resolveClass<JellyHandle>(JellyHandle.name);
    expect(j.service?.process()).toBe("wooof");
  });
});
