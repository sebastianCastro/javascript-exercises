const reverseString = function(originalStr) {
    let splitStr = undefined;
    let reveresedStr = undefined;
    for (let i = 0, len = originalStr.length ; i <= len; i++) {
        splitStr = originalStr.split("");
        let reverseArray = splitStr.reverse();
        reveresedStr = reverseArray.join("");
    }return reveresedStr;
};

module.exports = reverseString;
