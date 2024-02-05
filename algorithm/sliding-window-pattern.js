/**Used for keeping track of subset of data in an array/string */
/**Example-Problem: Write a function which accepts an integer array and a number
 * and returns max sum of consucutive number(total number of elements equals given number)
 */

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    /**If num =3 then maxSum=arr[0]+arr[1]+arr[2] and tempSum=maxSum till this point
     * In Line 22 we are going to assign arr[1]+arr[2]+arr[3] to tempSum and in this way only
     * loop will move
     */
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));