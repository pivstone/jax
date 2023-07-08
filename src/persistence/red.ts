import { Bean } from "..";
import { Repo } from "./interface";

@Bean()
export class RedRepo implements Repo {
  save() {
    return "red";
  }
}
