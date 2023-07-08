import { Cat, Jellycat } from "../cat";
import { Bean, Inject } from "../utils";
import { Home } from "./abstract";

@Bean("JellyHome")
export class JellyHome extends Home {
  @Inject<Cat>(Jellycat.name)
  pet?: Cat;
}
