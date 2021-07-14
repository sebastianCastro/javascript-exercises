const repeatString = function(partialStr, repeatingTimes) {
    let i = 0;
    let myStr = "";
    if (repeatingTimes < 0){
        return "ERROR";
    }while (i < repeatingTimes){
        myStr += partialStr;
        i ++;
    } return myStr;
};

module.exports = repeatString;
