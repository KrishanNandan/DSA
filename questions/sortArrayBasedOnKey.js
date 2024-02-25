/**Write a function that takes an array of objects and a key,
 * and returns a new array sorted based on the values of that key in ascending order. */

function sortArrayBasedOnKey(arr, key) {
  return arr.sort((a, b) => a[key] - b[key]);
}

