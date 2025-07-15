// function memoize(fn) {
//     const calledMethod={};
//     return function(...args) {
//         const key= `${fn.name}${JSON.stringify(args)}`;
//         if(key in calledMethod){
//             return calledMethod[key];
//         }
//         else{
//           calledMethod[key]= fn(...args);
//            return calledMethod[key];
//         }
//     }
// }

function  sortByFrequency (str) {
  let frequencyChars = {};
  str.split("").forEach((val)=>{
    frequencyChars[val]= frequencyChars[val] ? frequencyChars[val] + 1 : 1;
  });
  console.log(frequencyChars);
}

console.log(sortByFrequency("tree"));