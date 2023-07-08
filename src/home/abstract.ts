import { Cat } from "../cat";

export abstract class Home {
  pet?: Cat;

  pat() {
    console.log(this.pet?.meow());
  }
}