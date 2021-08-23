const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let fibonacciArray = [0,1];
    let a = fibonacciArray[0];
    let b = fibonacciArray[1];
    let numberToBePush = 0;
    while (fibonacciArray.length <= number) {
        numberToBePush = fibonacciArray[a] + b;
        fibonacciArray.push(numberToBePush);
        a++;
        b = numberToBePush;
    }
    return fibonacciArray[number];
};

module.exports = fibonacci;
