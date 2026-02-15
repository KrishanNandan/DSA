const myObj = { a: 1, b: 2, c: 3 };

myObj[Symbol.iterator] = function () {
    let keys = Object.keys(this)
    let i = 0;
    return {
        next: () => {
            if (i < keys.length) {
                return { value: this[keys[i++]], done: false };
            } else {
                return { done: true };
            }
        }
    };
};

for (let val of myObj) console.log(val); // 1, 2, 3


/**Alternate solution*/
myObj[Symbol.iterator] = function* () {
    for (let key of Object.keys(this)) {
      yield [key,this[key]]; // 'yield' returns the value and PAUSES here until the next loop
    }
};

/** Baiscally for of loop, spread operator runs next function for every loop and sees for done value if its true then it stops*/
/**This is called iterator pattern in general whose purpose is to return value of a collection but with abstraction
 * In js it is hardcoded requirement to implement iterator protocol for for of loop etc.
 */