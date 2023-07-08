import {
  Injector,
  createInjector,
} from "typed-inject";
import { AsyncLocalStorage } from "node:async_hooks";
import { Constructor } from "./types";

type Container<TContext = {}> = {
  registery: Map<string, string>;
  injector: Injector<TContext>;
};

const containMap: Map<string, Container> = new Map();
const asyncLocalStorage = new AsyncLocalStorage<{ profile: string }>();

const getContainer = (profile = "default") => {
  let container = containMap.get(profile);
  if (!container) {
    const injector = createInjector();
    const registery = new Map();
    container = { injector, registery };
    containMap.set(profile, container);
  }
  return container;
};

const updateContext = (profile: string, ctx: Container) => {
  containMap.set(profile, ctx);
};

export const resolveClass = <T>(name: string) => {
  try {
    const profile = getProfile();
    return getContainer(profile).injector.resolve(name as never) as T;
  } catch (err) {
    return getContainer("default").injector.resolve(name as never) as T;
  }
};

const getProfile = () => {
  const store = asyncLocalStorage.getStore();
  return store?.profile ?? "default";
};

export const provideClass = <Class extends Constructor, Token extends string>(
  name: Token,
  Clz: Class
) => {
  const profile = getProfile();
  const container = getContainer(profile);
  if (container.registery.has(name)) {
    throw new Error(`Bean Name conflict!: ${name}`);
  } else {
    container.registery.set(name, profile);
  }
  const injector = container.injector;
  container.injector = injector.provideClass(name, Clz);
  updateContext(profile, container);
};

export const Profile =
  (profile: string) => (originalMethod: any, _context: any) => {
    const store = { profile };
    asyncLocalStorage.enterWith(store);
    return originalMethod;
  };
