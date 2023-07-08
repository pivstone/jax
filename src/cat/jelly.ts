import { Cat } from "./interface";
import { BlueFurr, Furr } from "../furr";
import { Bean, Inject } from "../utils";

@Bean()
export class Jellycat implements Cat {
  @Inject<Furr>(BlueFurr.name)
  furr?: Furr;

  meow() {
    return `${this.furr?.color()}: Wateeeer!`;
  }
}
