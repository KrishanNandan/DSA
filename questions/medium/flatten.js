/**Flattening infinite object */
function flattenObject(obj, prefix = '', res = {}) {
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            const propName = prefix ? `${prefix}.${key}` : key; /** here making key for nested object*/
            // Check if the value is a non-null object and not an array
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                flattenObject(obj[key], propName, res); /** res is sort of collecting the object */
            } else {
                res[propName] = obj[key];
            }
        }
    }
    return res;
}

console.log(flattenObject({ a: 1, b: 2, c: { ab: 1, bc: 2 } }));

//**Flatten the array */
function flattenArray(arr = []) {
    return arr.flat(Infinity);
}

console.log(flattenArray([[0,1,4,5,6,9,12],10,1,6,7,3,4,[[[[10,[[[12]]]]]]]]));
