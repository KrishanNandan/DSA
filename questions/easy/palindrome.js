function palindrome(str) {
  return str === str.split("").reverse().join("");
}

palindrome("aba");
