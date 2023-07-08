import { provideClass, resolveClass } from "./context";

type Constructor<T = {}> = new (...args: any[]) => T;

export const Bean =
  <Class extends Constructor>(name?: string) =>
  (clz: Class, _context: ClassDecoratorContext) => {
    provideClass(name ?? clz.name, clz);
    return clz;
  };

export const Inject =
  <T>(name: string) =>
  (_originalMethod: any, _context: ClassFieldDecoratorContext): (() => T) => {
    return (): T => <T>resolveClass(name);
  };
