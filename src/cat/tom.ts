import { RedFurr } from "../furr";
import { Furr } from "../furr/interface";
import { Bean, Inject } from "../utils";
import { Cat } from "./interface";

@Bean()
export class Tomcat implements Cat {
  @Inject<Furr>(RedFurr.name)
  furr?: Furr;

  meow() {
    return `${this.furr?.color()}: Fooooood!`;
  }
}
