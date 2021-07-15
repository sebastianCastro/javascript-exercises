const leapYears = function(year) {
    let fourHundred = year % 400;
    let four = year % 4;
    let hundred = year % 100;

    if (fourHundred == 0) {
        return true;
    }
    else if (four == 0 && hundred !== 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log(leapYears(1997))

module.exports = leapYears;
