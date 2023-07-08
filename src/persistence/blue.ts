import { Bean } from "..";
import { Repo } from "./interface";

@Bean()
export class BlueRepo implements Repo {
  save() {
    return "blue";
  }
}
