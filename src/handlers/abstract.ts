import { Service } from "../services";

export abstract class Handler {
  service?: Service;

  main() {
    console.log(this.service?.process());
  }
}