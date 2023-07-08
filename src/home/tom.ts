import { Cat, Tomcat } from "../cat";
import { Bean, Inject } from "../utils";
import { Home } from "./abstract";

@Bean()
export class TomHome extends Home {
  @Inject<Cat>("Tomcat")
  pet?: Cat;
}
