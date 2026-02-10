function integerSquareRoot(n) {
    if (n < 2) return n;
    
    let low = 1, high = n;
    let ans;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (mid * mid === n) return mid;
        
        if (mid * mid < n) {
            low = mid + 1;
            ans = mid;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

/**Newton's Method */
/**
 * guess = (guess+(x/guess))2
 */
function calculateSquareRoot(number) {
    if (number < 0) return NaN; // Square root of negative is not a real number
    if (number === 0 || number === 1) return number;

    let guess = number / 2; // Starting with a reasonable guess
    let precision = 0.0000001; // How accurate you want the result to be

    // Keep refining the guess until the change is smaller than our precision
    while (Math.abs(guess * guess - number) > precision) {
        guess = (guess + number / guess) / 2;
    }

    return guess;
}

// Example usage:
console.log(calculateSquareRoot(25)); // Output: 5.000000000014
console.log(calculateSquareRoot(2));  // Output: 1.414213562374
