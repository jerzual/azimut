export function Injectable<T>() {
  return target => {
    console.log(target);
  };
  //    return Injector.inject(target.constructor);
}
/*
export function Injectable<T>(
    originalConstructor: Constructible<T>,
): Constructible<T> {
    return Injector.inject(originalConstructor);
}
*/
