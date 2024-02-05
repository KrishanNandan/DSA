/**Used for keeping track of subset of data in an array/string */
/**Example-Problem: Write a function which accepts an integer array and a number
 * and returns max sum of consucutive number(total number of elements equals given number)
 */
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
  /**Each time method is getting called one value of array gettting passed is reduced due to slice
   * and when again coming to line 16 due to slice it is getting reduced though slice is not mutating
   * the array
  */
    helper(helperInput.slice(1));
  }
  helper([...arr]);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
