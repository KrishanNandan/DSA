/**Creational Pattern: It tells how objects are created */

/**Singleton-keeping same instance throughout the application jotai lib is an implementation of singleton
 * Note: If we export an object from one module to other and change its value in one file, then changes will be observed throughout
 *       the application i.e. whereever it has been imported and used. inshort js module by default singleton in nature.
*/
class Singleton {
  constructor() {
    /**Checking if instance exist */
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.count = 0; // The shared state
    Singleton.instance = this;
    
    // Note: We do NOT use Object.freeze(this) here 
    // because we want the 'count' property to be mutable.
  }

  increment() {
    return ++this.count;
  }
}

// Create the single instance and export it
const instance = new Singleton();
export default instance;

/** Application- state management, storing token using freeze user-Authentication etc. */


/**Factory Pattern: The Factory Pattern is about a "specialist" that creates instances for you. 
 * Application: The Factory Pattern is widely used in software development to handle situations 
 *              where you don't know the exact type of object you need until the code is actually running.
 * example: PaymentGateway(correct payment processor like which one to use Stripe, paypal, phonepay, ApplePay etc)
 *          Logging Frameworks(It's a fileLogger, consoleLogger, DbLogger, ProdLogger which logger object to create and use)
*/

class Car {
  constructor() { this.type = "Car", this.wheels = 4; }
}
class Bike {
  constructor() { this.type = "Bike", this.wheels = 2; }
}
// 2. The Factory - The "Middleman"
class VehicleFactory {
  createVehicle(vehicleType) {
    switch (vehicleType.toLowerCase()) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        return null;
    }
  }
}

// 3. Usage
const factory = new VehicleFactory();
const myRide = factory.createVehicle("car");
const yourRide = factory.createVehicle("bike");
console.log(myRide.type);   // "Car"
console.log(yourRide.type); // "Bike"
