/** Structural pattern: How objects are assembled, Decorator,Adapter and Mixins are example of this*/

/**Mixin Pattern: It is used to have multiple inheritance in js since js only supports single inheritance*/
const loggerMixin = {
  log(message) {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }
};
class User {
  constructor(name) { this.name = name; }
}
// Inject functionality into the User prototype
Object.assign(User.prototype, loggerMixin);
const user = new User("Alice");
user.log("User logged in"); // [LOG] 2024-05-20...: User logged in
/**Note: Above implementation is also called Object-Based Mixins or Prototype Decoration*/
