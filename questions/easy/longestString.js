function longestString(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "";
  let indexOfLargestString = 0;
  arr.forEach((val, index) => {
    if (val?.length > arr[indexOfLargestString].length) {
      indexOfLargestString = index;
    }
  });
  return arr[indexOfLargestString];
}

/**Example */
console.log(longestString(["abc", "cdbadfsg", "a", "shdjsdshjdhsjsds"]));
