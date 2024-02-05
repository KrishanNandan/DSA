/**Multiple pointer pattern is used on sorted array, it is used to reduce code complexity  */
/**In this pattern we evaluate 2 or more elements of array once, it could be 1st and last or 1st and 2nd and we
 * keep on moving to middle or end of array */
/**Below problem: Write a function which accepts a sorted array of integer and returns first pair
 * of values whose sum is zero if none find then returns undefined
 */

/**Note: Use it when output is going to be single value and given array assesments
 * have to be done only in one complete loop
 */

function sumZero(arr) {
  if (!Array.isArray(arr) || arr.length < 1) return undefined;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else {
      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return undefined;
}

console.log(sumZero([-1, -2, 1, 2, 3, 4, 6]));
