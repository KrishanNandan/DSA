/**Multiple pointer pattern is used on sorted array, it is used to reduce code complexity  */
/**In this pattern we evaluate 2 or more elements of array once, it could be 1st and last or 1st and 2nd and we
 * keep on moving to middle or end of array */

/**Below problem: Write a function which accepts a sorted array of integer and returns first pair
 * of values whose sum is zero if none find then returns undefined
 */

/**Note: Use it when output is going to be single value and given array assesments
 * have to be done only in one complete loop
 */

// function sumZero(arr) {
//   if (!Array.isArray(arr) || arr.length < 1) return undefined;
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else {
//       if (sum > 0) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//   }
//   return undefined;
// }
// console.log(sumZero([-1, -2, 1, 2, 3, 4, 6]));



// Count unique values in a sorted array
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let count = 1;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j - 1] !== arr[j]) {
//       count++;
//     }
//   }
//   return count;
// }
// countUniqueValues([1, 1, 1, 1, 1, 2]); // Expected: 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // Expected: 7
// countUniqueValues([]); // Expected: 0
// countUniqueValues([-2, -1, -1, 0, 1]); // Expected: 4




//Problem: Given a string, reverse it in place.
// function reverseString(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i = 0; i--) {
//     newStr = newStr+str.charAt(i);
//   }
//   console.log(newStr);
// }

// reverseString("hello"); // Expected: "olleh"
// reverseString("JavaScript"); // Expected: "tpircSavaJ"




// Average Pair: Implement a function averagePair(arr, targetAvg) that accepts a sorted array of integers and a target average. The function should determine if there is a pair of values in the array where the average of the pair equals the target average.
// function averagePair(arr, targetVal) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left !== right) {
//     if ((arr[left] + arr[right]) / 2 === targetVal) return true;
//     if ((arr[left] + arr[right]) / 2 > targetVal) right--;
//     if ((arr[left] + arr[right]) / 2 < targetVal) left++;
//   }
//   return false;
// }
// averagePair([1, 2, 3], 2.5);





//Subsequence Check: Implement a function isSubsequence(str1, str2) that takes two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. The order matters, but the characters don't need to be contiguous.
// function isSubsequence(subStr, str) {
//     const lengthSub = subStr.length;
//     for (let i = 0; i < str.length; i++) {
//         if (str.substring(i, i + lengthSub) === subStr) return true;
//     }
//     return false;
// }
// console.log(isSubsequence("hello", "world hello")); will return true





//Find Missing Words: Given two strings, where the first string is a superset of the second 
// string (meaning the second string's words are a subsequence of the first string's words, 
// space-delimited), return an array containing the words missing from the second string.
//
// function missingWords(superset, word) {
//   const supersetArray = superset.split(" ");
//   return supersetArray.filter(val=>val!==word);
// }
//         OR
// (not a good solution)
// function missingWords(superset, word) {
//     const supersetArray = superset.split(" ");
//     let left = 0;
//     let right = supersetArray.length-1;
//     let result = [];
//     while(left!==right){
//         if(supersetArray[left]!==word){
//             result.push(supersetArray[left]);
//         }

//         if(supersetArray[right]!==word){
//             result.push(supersetArray[right]);
//         }
//         left ++ ;
//         if (left !== right) right -- ;
//     }
//     return result;
// }
//        OR 
// (Clean code)           
// function missingWords(superset, word) {
//     const supersetArray = superset.split(" ");
//     let result = [];

//     for (let i = 0; i < supersetArray.length; i++) {
//         if (supersetArray[i] !== word) {
//             result.push(supersetArray[i]);
//         }
//     }

//     return result;
// }  
// missingWords("I like cheese", "like") should return ["I", "cheese"].




// Move Zeros To End: Implement a function moveZerosToEnd(arr) that moves all zeros in an array to the end while maintaining the order of the non-zero elements.
// function moveZerosToEnd(arr) {
//   let zeroesArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) { zeroesArray.push(arr[i]) } else {
//       zeroesArray.unshift(arr[i]);
//     };
//   }
//   return zeroesArray;
// }

//         or

// using dutch national flag algorithm
// function moveZerosToEnd(arr) { 
//     let nonZeroEnd = 0 ;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]!==0){
//             [arr[nonZeroEnd],arr[i]] = [arr[i],arr[nonZeroEnd]];
//             nonZeroEnd++;
//         }
//     }
//     return arr;
// }
//  console.log(moveZerosToEnd([0,1,0,3,12]));
//	Example: moveZerosToEnd([0,1,0,3,12]) should return [1,3,12,0,0].



// Three Sum: Given an array nums of n integers, return all unique triplets [a, b, c] in the array such that a + b + c = 0.
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {/** Here we are selecting 1 element which will be the first element*/
        // Optimization: If first number > 0, sum can't be 0 (since array is sorted) since 2nd and 3rd will be larger than first element since array is sorted
        if (nums[i] > 0) break; 
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // skiping duplicate values

        let left = i + 1, right = nums.length - 1; //here we have selected 2nd and 3rd element

        while (left < right) { // here we are using multi pointer method to shuffle 2nd and 3rd element in the array and checking if they make sum 0 with 1st element
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates for both pointers
                while (nums[left] === nums[++left]); //here first we are incrementing left and checking if it is same as previous if yes then we are again incrementing and checking
                while (nums[right] === nums[--right]);//Opposite of above logic
                /**skipping is necessary here else we can get duplicate pair of zeros, but not incase of below 2 scenario since if less than or greater came then again they will move ahead*/
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//	Example: Given nums = [-1, 0, 1, 2, -1, -4], a solution set is [[-1, 0, 1], [-1, -1, 2]]. 


//Already sorted array
function twoSumZero(arr) {
  if (!Array.isArray(arr) || arr.length < 1) return undefined;
  let left = 0;
  let right = arr.length - 1;
  let result = []
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      result.push([arr[left], arr[right]]);
      while(arr[left]===arr[++left]);
      while(arr[right]===arr[--right]);
    } else {
      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}
console.log(twoSumZero([-2, -1, 1, 2, 3, 4, 6]));