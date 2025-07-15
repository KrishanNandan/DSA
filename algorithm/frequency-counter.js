/**We use this algo to count occurence of each element in an array */
function frequencyCounter(arr) {
  if (arr.length < 1 || !Array.isArray(arr)) return {};
  let occurences = {};
  arr.forEach((val) => {
    occurences[val] = (occurences[val] || 0) + 1;
  });
  return occurences;
}

console.log(
  frequencyCounter([
    1, 1, 1, 1, 1, 5, 3, 2, 2, 2, 8, 88, 6, 6, 12, 43, 12, 10, 0, 11, 1, 0,
  ])
);

/**Note: When we put numbers as key in object then it gets sorted by default in ascending order**/


/** Sort letters of string in descending order by number of times they occur also if occurence is same then give precendencee to their
 * occurence in alphabet e.g "eleven" will return "eeelnv"
 */
function sortByFrequency(str) {
    let frequencyChars = {};
    str.split("").forEach((val) => {
        frequencyChars[val] = frequencyChars[val] ? frequencyChars[val] + 1 : 1;
    });
    frequencyChars = Object.fromEntries([...Object.entries(frequencyChars)].sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1]
        }
        return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }
    ));
    let sortedStr = "";
    for (let x in frequencyChars) {
        sortedStr = sortedStr.concat(x.repeat(Number(frequencyChars[x])))
    }
    return sortedStr;
}
console.log(sortByFrequency("eleven"));
