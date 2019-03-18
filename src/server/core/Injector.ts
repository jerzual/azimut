import "reflect-metadata";

type Constructible<T> = new (...args: any[]) => T;

export default class Injector {
  private static instances: {
    cx: Constructible<any>;
    object: any;
  }[] = [];

  public static inject<T>(
    originalConstructor: Constructible<T>,
  ): Constructible<T> {
    const paramTypes = Reflect.getOwnMetadata(
      "design:paramtypes",
      originalConstructor,
    );

    if (paramTypes.length == 0) {
      Injector.instances.push({
        cx: originalConstructor,
        object: null,
      });
      return originalConstructor;
    }

    const newArgs = paramTypes.map((f: any) => Injector.get(f));
    const newConstructor = originalConstructor.bind(null, newArgs);

    Injector.instances.push({ cx: newConstructor, object: null });

    return newConstructor;
  }

  public static get(cx: Constructible<any>): any {
    const ci = this.instances.find(f => f.cx == cx);

    if (!ci) {
      throw "Invalid DI configuration.";
    }

    if (ci.object == null) {
      ci.object = new ci.cx();
    }

    return ci.object;
  }
}
