const controllers = [];
// controller, class annotation
export function Controller(rootPath: string) {
  controllers.push(this);
  return target => {
    target.rootPath = rootPath;
  };
}

// route, fonction annotation
export function Get(path: string) {
  console.log(`Get(${path}): evaluated`);
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Get(${path}): called`, target, propertyKey, descriptor);
  };
}
export function Post(path: string) {
  console.log(`Post(${path}): evaluated`);
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Post(${path}): called`, target, propertyKey, descriptor);
  };
}
export function Put(path: string) {
  console.log(`@Put(${path}): evaluated`);
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`@Put(${path}): called`, target, propertyKey, descriptor);
  };
}
export function Delete(path: string) {
  console.log(`@Delete(${path}): evaluated`);
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`@Delete(${path}): called`, target, propertyKey, descriptor);
  };
}
