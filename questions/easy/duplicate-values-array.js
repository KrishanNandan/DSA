function duplicateValuesArray(arr) {
  if (!Array.isArray(arr) || arr.length < 1) return [-1];
  /**Making array of elements which repeated in the given array */
  const repeatedValues = [
    ...new Set(...[arr.filter((val, index) => arr.indexOf(val) !== index)]),
  ];
  if (repeatedValues.length < 1) return [-1];
  /**Sorting the array in ascending order */
  return repeatedValues.sort((a, b) => a - b);
}

console.log(
  duplicateValuesArray([
    1, 1, 1, 1, 1, 5, 3, 2, 2, 2, 8, 88, 6, 6, 12, 43, 12, 10, 0, 11, 1, 0,
  ])
);
