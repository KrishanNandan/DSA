function deepCloning(obj) {
  /**First converting into primitive type and then converting back to object */
  return JSON.parse(JSON.stringify(obj));
}
