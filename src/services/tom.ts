import { RedRepo } from "../persistence";
import { Repo } from "../persistence/interface";
import { Bean, Inject } from "../utils";
import { Service } from "./interface";

@Bean()
export class Tomcat implements Service {
  @Inject<Repo>(RedRepo.name)
  repo?: Repo;

  process() {
    return `${this.repo?.save()}: Fooooood!`;
  }
}
