const repeatString = function(str, n) {
    
    let returnMe = str;

    if (n == 0) return "";

    if (n < 0) return "ERROR";

    while (--n > 0) {
        returnMe += str;
    }
    return returnMe;
};

// Do not edit below this line
module.exports = repeatString;
