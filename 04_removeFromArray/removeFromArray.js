const removeFromArray = function (arr, ...n) {
    for (let j = 0; j < n.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === n[j]) {
                arr.splice(i, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
