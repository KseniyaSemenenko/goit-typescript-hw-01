function merge<T extends Object>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}
