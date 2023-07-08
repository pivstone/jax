import { JellyService, Service } from "../services";
import { Bean, Inject } from "../utils";
import { Handler } from "./abstract";

@Bean()
export class JellyHandle extends Handler {
  @Inject<Service>(JellyService.name)
  service?: Service;
}
