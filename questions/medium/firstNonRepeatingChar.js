// 32. Find the First Non-Repeated Character in a String in JavaScript?

function fun(str) {
    let stringCounts = {};
    str.split('').forEach(val => {
        stringCounts[val] = stringCounts[val] ? stringCounts[val] + 1 : 1;
    })
    for (let key in stringCounts) {
        if (stringCounts[key] === 1) return key;
    }
    return null;
}
console.log(fun('GeeksForGeeks'));