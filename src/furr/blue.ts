import { Bean } from "..";
import { Furr } from "./interface";

@Bean()
export class BlueFurr implements Furr {
  color() {
    return "blue";
  }
}
