import { Service } from "./interface";
import { BlueRepo, Repo } from "../persistence";
import { Bean, Inject } from "../utils";

@Bean()
export class JellyService implements Service {
  @Inject<Repo>(BlueRepo.name)
  repo?: Repo;

  process() {
    return `${this.repo?.save()}: Wateeeer!`;
  }
}
