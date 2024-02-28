const reduce = function (nums, fn, init) {
    nums.forEach((val) => {
        init = fn(init, val);
    })
    return init;
};