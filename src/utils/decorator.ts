import { provideClass, resolveClass } from "./context";
import { Constructor } from "./types";



export const Bean =
  <Class extends Constructor>(name?: string) =>
  (clz: Class, _context: ClassDecoratorContext) => {
    const token = name ?? clz.name
    provideClass<Class, typeof token>(token, clz);
    return clz;
  };

export const Inject =
  <T>(name: string) =>
  (_originalMethod: any, _context: ClassFieldDecoratorContext): (() => T) => {
    return (): T => <T>resolveClass(name);
  };
