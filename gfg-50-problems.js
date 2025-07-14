//https://www.geeksforgeeks.org/javascript/javascript-coding-questions-and-answers/

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("united"));

// function isPalindrome(str) {
//     return str.split('').reverse().join('') === str
// }

// console.log(isPalindrome("united"));
// console.log(isPalindrome("aba"));

//Write a Program to check if a number is prime or not?
// function isPrime(num) {
//     if (num <= 1)
//         return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0)
//             return false;
//     }
//     return true;
// }
// console.log(isPrime(7));

// Write a Program to print Fibonacci sequence up to n terms?
// function fibonacci (term){
//     let terms = [0,1];
//     if (term<=2) return terms;
//     for(let i=2; i<=term-1; i++){
//         terms.push(terms[i-1]+terms[i-2]);
//     }
//     return terms;
// }
// console.log(fibonacci(7));

// Write a Program to find factorial of a number?
// function factorial(num) {
//     if (num === 1) return 1;
//     return num * factorial(num - 1);
// }
// console.log(factorial(7));

// Write a Program to count the occurrences of a character in a string in JavaScript?
// function frequencyChar(str,substr) {
// let sequences = {}
// str.split("").forEach(element => {
//     sequences[element] = sequences[element] ? sequences[element] + 1 : 1 ;
// });
// return sequences[substr];

// or 

//       return str.split(substr).length - 1;
// }
// console.log(frequencyChar('GeeksForGeeks', 'e'));

//  Find the Intersection of Two Arrays in JavaScript?
// function intersection(arr1, arr2) {
//     const uniqueArr1 = [... new Set(arr1)];
//     const uniqueArr2 = [... new Set(arr2)];
//     return uniqueArr1.filter(val=>uniqueArr2.includes(val));
// }
// console.log(intersection([5, 6,6,8,9, 7], [6, 7,8 ,5,4,6]));

//Check if a String Contains Another String in JavaScript?

// function containsSubstring(str, substring) {return Boolean(str.split(substring).length-1)}

// or

// function containsSubstring(str, substring) {
// //searches for the substring within str
// return str.indexOf(substring) !== -1;
// }

// console.log(containsSubstring('GeeksForGeeks', 'For'));



// 32. Find the First Non-Repeated Character in a String in JavaScript?

// function fun(str) {
//     let stringCounts = {};
//     str.split('').forEach(val => {
//         stringCounts[val] = stringCounts[val] ? stringCounts[val] + 1 : 1;
//     })
//     for (let key in stringCounts) {
//         if (stringCounts[key] === 1) return key;
//     }
//     return null;
// }
// console.log(fun('GeeksForGeeks'));

// 33. Find the Longest Word in a String in JavaScript?

// function longestWord(str) {
//     let index = 0;
//     const arrStr = str.split(" ");
//     arrStr.forEach((val,int)=>{
//         if(val.length> arrStr[index].length){
//             index = int;
//         }
//     })
//     return arrStr[index];
// }

// console.log(longestWord(' is great GeeksForGeeks is great  dsjkhkfdjfkjdkfjdkjfkdjfkdjfk'));

// 47. Find the maximum difference between two numbers in an array in JavaScript?

// function maxDifference(arr) {
//     const sortedArray = arr.sort((a,b)=>a-b);
//     return sortedArray[sortedArray.length-1] - sortedArray[0];
//  }
// console.log(maxDifference([1, 2, 90, 10, 110]));


// 50. Get Unique Characters from a String in JavaScript?
function uniqueCharacters(str) {
    return [... new Set(str.split(""))].join("");
}

console.log(uniqueCharacters("geeksforgeeks"));