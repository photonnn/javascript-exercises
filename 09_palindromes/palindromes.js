const palindromes = function (str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= "A" && str.charAt(i) <= "Z" ||
            str.charAt(i) >= "a" && str.charAt(i) <= "z") {
                newStr += str.charAt(i);
            }
    }

    newStr = newStr.toLowerCase();


    while (newStr.length > 1) {
        if (newStr.charAt(0) == newStr.charAt(newStr.length - 1)) {
            newStr = newStr.slice(1, newStr.length - 1);
        } else {
            return false;
        }
    }
    return true;;
};

// Do not edit below this line
module.exports = palindromes;
