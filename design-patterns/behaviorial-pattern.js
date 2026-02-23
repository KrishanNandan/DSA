/**Behaviorial-Pattern: These are concerned with algorithms and the assignment of responsibilities b/w objects*/

/**
 * The Observer Pattern is a design pattern where an object (the Subject) maintains a list of dependents (Observers) 
 * and notifies them automatically of any state changes, usually by calling one of their methods.
 * It is the foundation of Event-Driven Programming.
 */


/**Applications: UI (State management,DomEvents), Decoupling(one's work complete can inform other module, else multiple logic in same file)
 *               Real-Time Systems(when a message arrives through websockets handlers notifies all open chat windows)                       
*/
class loginObservable {
    constructor() {
        this.observers = [];
    }

    /**Adding methods which will be run at the time of state change*/
    subscribe(func) {
        this.observers.push(func)
    }

    /**Removing method which have been unsubscribed*/
    unSubscribe(func) {
        this.observers = this.observers.filter(val => val !== func);
    }

    /**Notifying all the subscribers*/
    notify(val){
      this.observers.forEach(observer=>{
        observer(val);
      })
    }

}

export default new loginObservable(); /**Here it is using sigalton pattern since directly sending the object*/