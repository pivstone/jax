import { Service, Tomcat } from "../services";
import { Bean, Inject } from "../utils";
import { Handler } from "./abstract";

@Bean()
export class Tomhandler extends Handler {
  @Inject<Service>(Tomcat.name)
  service?: Service;
}
