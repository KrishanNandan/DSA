const longestSubString = (str, subStr) => {
  let end = subStr.length;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let word = str.subString(i, i + end);
    if (word === subStr) {
      count++;
    }
  }
  return count;
};

console.log(longestSubString('lorie lo lole','lo'));