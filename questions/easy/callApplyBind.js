function callApplyBind(value1, value2) {
  return `${this.name} is of ${value1} years and ${value2} months`;
}
const person = {
  name: "krishan"
}
console.log(callApplyBind.call(person, 31, 5));
console.log(callApplyBind.apply(person, [31, 7]));
const bindedFuncWithPartialApp = callApplyBind.bind(person, 31);
console.log(bindedFuncWithPartialApp(8));