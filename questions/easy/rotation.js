/**
 * Implement a function that returns an updated array with r right rotations on an array of integers.
Example:
Given the following array: [2,3,4,5,7]
Perform 3 right rotations:
First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
return [4,5,7,2,3]
 * 
 */

function rotateRight(arr,rotations){
  if(rotations == 0) return arr;
  for(let i = 0; i < rotations;i++){
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}
rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]   

/**Better solution
 * 
 * 
 */
function rotateRight(arr, rotations) {
  const n = arr.length;
  if (n === 0) return arr;

  // 1. Handle rotations larger than array length (e.g., rotate 5 times on array of 3)
  const k = rotations % n;
  if (k === 0) return arr;

  // 2. Slice the last 'k' elements and the rest, then join them
  // This is O(n) because it creates a new array once.
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
