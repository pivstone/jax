import { Bean } from "..";
import { Furr } from "./interface";

@Bean()
export class RedFurr implements Furr {
  color() {
    return "red";
  }
}
