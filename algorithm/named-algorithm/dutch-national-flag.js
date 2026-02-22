function sortMixedArray(arr) {
    let numEnd = 0, strEnd = 0;
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (typeof val === 'number') {
            // Move to number section
            [arr[i], arr[strEnd]] = [arr[strEnd], arr[i]];/**Here we are putting things at i place to strEnd place*/
            [arr[strEnd], arr[numEnd]] = [arr[numEnd], arr[strEnd]];/**Here we are putting things at strEnd place to numEnd place*/
            numEnd++;/**not directly at numEnd else number coming after a string would have replaced previous number since incase of num*/
            strEnd++;/**Both pointer moves 1 place but incase of string only string pointer, so if a num then a string then again a num */
        } else if (typeof val === 'string') { /**Would have replaced string at begining so we moved the pointer by 1*/
            // Move to string section
            [arr[i], arr[strEnd]] = [arr[strEnd], arr[i]];
            strEnd++;
        }
    }
    return arr;
}

// --- Testing ---
const data = ["apple", true, 10, "banana", false, 5.5, true, "cherry", 100];
console.log("Sorted Array:", sortMixedArray(data));
// Output: [10, 5.5, 100, "apple", "banana", "cherry", true, false, true]
//Execution order (Note we are putting number at front and string in the middle so bydefault booleans are going at end)
//["apple", true, 10, "banana", false, 5.5, true, "cherry", 100]  exec-0  strEnd=0 and numEnd=0 initial

//["apple", true, 10, "banana", false, 5.5, true, "cherry", 100]  exec-1  strEnd=1 and numEnd=0

//["apple", true, 10, "banana", false, 5.5, true, "cherry", 100]  exec-2  strEnd=1 and numEnd=0

//["apple", 10, true, "banana", false, 5.5, true, "cherry", 100]; exec-3  
//[10, "apple", true, "banana", false, 5.5, true, "cherry", 100];          strEnd=2 and numEnd=1

//[10, "apple","banana", true , false, 5.5, true, "cherry", 100];  exec-4  strEnd=3 and numEnd=1

//[10, "apple","banana", true , false, 5.5, true, "cherry", 100]; exec-5   strEnd=3 and numEnd=1


//[10, "apple","banana", 5.5 , false, true, true, "cherry", 100];  exec-6
//[10, 5.5 ,"banana", "apple" , false, true, true, "cherry", 100];         strEnd=4 and numEnd=2

//[10, 5.5 ,"banana", "apple" , false, true, true, "cherry", 100];  exec-7  strEnd=4 and numEnd=2

//[10, 5.5 ,"banana", "apple" , "cherry", true, true, false, 100];  exec-8  strEnd=5 and numEnd=2


//[10, 5.5 ,"banana", "apple" , "cherry", 100, true, false, true];  exec-9  strEnd=5 and numEnd=2
//[10, 5.5 ,100, "apple" , "cherry","banana", true, false, true];          strEnd=6 and numEnd=3

/**This swapping technique is having time complexity as O(n) and space complexity is o(1)*/
/**If we want to do grouping for 4 items then there will be 3 swaps of number instead of 2 now and for string 2 and other dataType 1 and
 * last data type would be by default left out.
 */
