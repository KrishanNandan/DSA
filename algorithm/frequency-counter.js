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


function  sortByFrequency (str) {
  let frequencyChars = {};
  str.split("").forEach((val)=>{
    frequencyChars[val]= frequencyChars[val] ? frequencyChars[val] + 1 : 1;
  });
  console.log(frequencyChars);
}

console.log(sortByFrequency("tree"));
