/**Recurion: It is the process(method/function) that calls itsself time and again
 * Real world example would be Json.parse/object traversal/dom traversal/getElementById
 * Recursion is made up of Base cond(cond. where recursion ends) and Different other inputs
 */

/**
 * There might be scenario where we have to store the value in those scenario we define a outer
 * funtion where values get stored or initialized and we have a helper function where real
 * recursion happens and remember to pass copy of objects to this helper function else it might
 * change the value stored
 */

/**
 * Each execution context is call stack frame and number of frame that can be stored is called
 * stack size, recursion function calls itself again and again which is more like making
 * stack frame each time it is getting excuted so if there is very long set of data and we are
 * running recursion over it then high chances are that stack overflow might happen which is the
 * case when stack size exceeds
 */

function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
      if (helperInput.length === 0) return;
      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }
    /**Each time method is getting called one value of array gettting passed is reduced due to slice
     * and when again coming to line 32 due to slice it is getting reduced though slice is not mutating
     * the array
    */
      helper(helperInput.slice(1));
    }
    helper([...arr]);
    return result;
  }
  
  console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
