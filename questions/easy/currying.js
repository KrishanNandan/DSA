/**Converting a function into curry function*/
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) return fn(...args);
        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        }
    }
}
/**Infinite curry function sum */
function infiniteSum(a) {
    return function (b) {
        if (b === undefined) return a;
        infiniteSum(a + b);
    }
}

/** uses of curry
 * 
 * Partial Application and Specialization
 * Functional Composition
 * Event Handling & UI Logic
 * Configurable Logging Systems
 * Code Reusability and Modularity
 * Delayed (Lazy) Execution
 * 
 * */ 