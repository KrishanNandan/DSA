var x = 23;
(function () {
    var x = 43;
    (function random() {
        x++;
        console.log(x);
        var x = 21;
    })();
})();

//output: NAN


let x = {}, y = { name: "Ronny" }, z = { name: "John" };
x[y] = { name: "Vivek" };/** here x[y] means x['object object'] */
x[z] = { name: "Akki" };/** here x[z] means x['object object'] */
console.log(x[y]);/** here x[y] means x['object object'] hence last value is outputed*/
//output: { name: 'Akki' }


console.log("1" + 1); // 11
console.log("A" - 1); // NaN
console.log(2 + "-2" + "2"); // 2-22
console.log("Hello" - "World" + 78);// NaN
console.log("Hello" + "78");// Hello78
console.log(typeof NaN); // number


let a = 0;
let b = false;
console.log((a == b)); //true
console.log((a === b)); //false

function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);

  var x = 2;
  let y = 12;
}
func1(); // will log 2 and 12 since setTimeout is async so below code will run


function func2(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
}
}
func2(); // 3 will get logged 3 times


function func3(){
  for(let i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
}
}
func3(); // 0,1,2 will get logged, this happens because let is block scope and so all 
// three times private instance creates due to closure but in case of var only one instance location since it is function scoped
// so i value goes till 3 though for 3 loop doesn't run but incrementation happens

(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();
/** Will log 2 4 3 1 */

(function(a){
  return (function(){
    console.log(a);
    a = 23; // if var a =23 then output will be undefined due to hoisting
  })()
})(45); // output 45 


  let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;
  
  let hero2 = {powerLevel:42};
  console.log(getPower());
  console.log(getPower.apply(hero2));
  // output undefined,42


const b1 = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (function(){
        console.log(this?.name);
        console.log(self.name);
      })();
    }
  }
  b1.f(); //output will be vivek,undefined(since iffe is auto called no object called it),vivek


/*let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);// during this operation type coercion happens since js see one as primitive other object so call ValueOf on b
console.log(a === b);// during strict check type coercion doesn't happens
console.log(b === c);
true false false(Since == equals checks only values hence it passed but === checks type as well and b is an object)
*/

let greeting;
greetign = {}; // Typo!
console.log(greetign);/**Will log {} */
/**It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, 
 * the JS interpreter actually saw this as:

global.greetign = {} in Node.js
window.greetign = {}, frames.greetign = {} and self.greetign in browsers.
self.greetign in web workers.
globalThis.greetign in all environments.
In order to avoid this, we can use "use strict". 
This makes sure that you have declared a variable before setting it equal to anything. */


function bark() {
  console.log('Woof!');
}
bark.animal = 'dog';
/**This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)
A function is a special type of object. The code you write yourself isn't the actual function. 
The function is an object with properties. This property is invocable. */


function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
console.log(member.getFullName()); // will throw TypeError
/**In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. 
 * For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.
If you want a method to be available to all object instances, you have to add it to the prototype property: 
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
] };
*/

//Note:**** Inside arrow function this can only be inherited from parents of this i.e of global scope, even call, bind etc get ignored
// also arrow function written inside an object will have this as undefined, even after getting called by that object itself

// 'use strict';
// const team = {
//     a: 10,
//     c:()=>{
//         console.log(this); will give window in browser and blank object in node
//     }
// }

// team.c.call(team);

// 'use strict';
// const player = {
//     name: "Skywalker",
//     start: function() {
//         const arrowBtn = () => {
//             console.log("Hello, " + this.name); here this will point to player object since its parent is pointing to that
//         };
//         arrowBtn();
//     }
// };
// player.start();


function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');// 190 or 191 not run since failure will happen here itself if strict mode else undefined for 191
console.log(lydia);
console.log(sarah);
/**For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. 
 * However, if you don't add new, this refers to the global object!
We said that this.firstName equals "Sarah" and this.lastName equals "Smith". 
What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, 
since we don't return a value from the Person function. */


/*All object have prototypes.
A: true
B: false */ /**Correct answer will be false */
/** In JavaScript, all objects have prototypes, and 
 * the "base object" (typically Object.prototype) is the one exception that doesn't have a prototype itself. */
/** const prototypeOfMyObj = Object.getPrototypeOf(myObj);
console.log(prototypeOfMyObj === Object.prototype); // true
const rootPrototype = Object.getPrototypeOf(prototypeOfMyObj);
console.log(rootPrototype);// null */


//Ways to make prototype of an object as null
/**Way-1 
 const pureObj = Object.create(null);
console.log(Object.getPrototypeOf(pureObj)); 
*/
/**Way-2 
 const pureObj = {
  __proto__: null,
  name: "Data Only"
}; */
/**Way-3 
 * const myObj = { a: 1 };
Object.setPrototypeOf(myObj, null);  
*/


/**What happens if prototype of an object becomes null 
 * Built-in methods like .toString(), .hasOwnProperty(), instanceof and .valueOf() won't work
 * Lookup speed will be faster compared to normal since no prototype because engine don't have to search through prototype chain
 * Safer as dictionary since no key collision eg. myObj["toString"]="abc"
 * cleaner for "for in" loops since iterating over object will only show the properties you explicitly
*/ 

/** Why we can't set myObj.prototype=null
 * because .prototype property only exist on constructor function so this will simply add another property to the object
 * on object we have [[Prototype]]
 */

// const animalPrototype = {
//   sound() {
//     console.log(`${this.name} makes a sound.`);
//   }
// };

// const dog = Object.create(animalPrototype);// Object.create basically uses other's prototype to create new object
// in case of creating new plain object "const o = Object.create(Object.prototype);" happens when we do const o = {}
// dog.name = "Dog"; 
// dog.sound();

/**
 * let pureObj = {k:10};
   pureObj.l.k=17; // will throw error "cannot set property on undefined", though we can pureObj.l=17;
 */

/**Property descriptor:property descriptors are objects that describe the configuration and behavior of a specific property on an object
 * They act as "meta-properties," allowing you to control whether a property can be changed, deleted, or seen in loops. 
/**There are two main types of descriptors: Data and Accessor and a property can be only one out of these 2.
/* 1. Data Descriptors: These descriptors describe properties that hold a direct value.
/*  writable: 	If true, the value can be changed via assignment.
/*  enumerable:	If true, the property shows up in for...in loops and Object.keys().
/*  configurable	If true, the property can be deleted and its descriptor can be modified.
/*** These get changed by methods like seal freeze etc or we can explicitly do that like below
 * const user = { name: "Alex" };
// Change 'name' to be read-only and hidden from loops
Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
  configurable: true
});
 * 2. Accessor Descriptors
**These descriptors describe properties through a getter-setter pair of functions instead of a static value and only enumerable
** and configurable properties exist on them.
 * 
 */

let number = 0;
console.log(number++);//0 since value will be increased post loging or this line of code. 
console.log(++number);//2 so before coming to this line it was one and pre-increase happened so 2
console.log(number);//2

/**function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}
checkAge({ age: 18 });  will log "Hmm.. You don't have an age I guess" because When testing equality, 
primitives are compared by their value, while objects are compared by their reference. 
JavaScript checks if the objects have a reference to the same location in memory. */

function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}
getAge(); //** Due to use strict it will throw reference error else it would have worked and have created reference in window
// or global object*/