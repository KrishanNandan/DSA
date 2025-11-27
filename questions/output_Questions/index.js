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