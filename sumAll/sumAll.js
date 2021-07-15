const sumAll = function(startingNum, EndingNum) {
    if (typeof startingNum !== "number"|| typeof EndingNum !== "number") {
        return "ERROR";
    } else if (startingNum > EndingNum) {
        temporalStart = EndingNum;
        temporalEnd = startingNum;
        startingNum = temporalStart;
        EndingNum = temporalEnd;
    }
    result = 0;
    for (let i = startingNum; i <= EndingNum; i++) {
        result += i;
    } if (result < 0) {
        return "ERROR";
    } else {
        return result;
    }
};

// console.log(sumAll(10, [90, 1]))

module.exports = sumAll;
