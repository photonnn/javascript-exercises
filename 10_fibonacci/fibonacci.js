const fibonacci = function(n) {
    if (n < 1) { return "OOPS"; }
    else if (+n === 1) { return 1; }
    else if (+n === 2) { return 1; }
    else {
        return fibonacci(+n-2) + fibonacci(+n-1);
    }

};

// Do not edit below this line
module.exports = fibonacci;
