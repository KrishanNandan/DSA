/**We use this algorithm to divide the dataset in smaller chunks and then repeating
 * a process with a subset of data, it can tramendeously decrease time complexity
 */

/**
 * Example problem could be Binary search
 * in below problem we divided the data set to half then in next iteration half 
 * of what was in last iteration
 */

/**Note: This can only be applied on sorted array */

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] > num) {
      end = mid - 1;
    }
    if (arr[mid] < num) {
      start = mid + 1;
    }
  }
}

console.log(binarySearch([2,4,7,9,14,17,19], 17));