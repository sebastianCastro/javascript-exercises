const removeFromArray = function (numbersArray, ...numsToDelete) {
    let toDeleteLen = numsToDelete.length;
    let numbersLen = numbersArray.length;
    i = 0;
    j = 0;
    while (j < toDeleteLen) {
        while (i < numbersLen) {
            if (numbersArray[i] === numsToDelete[j]) {
                removeNum = numbersArray.indexOf(numsToDelete[j]);
                numbersArray.splice(removeNum,1);
                i = 0;
                // j++;
                break;
            } else {
                i++;
            }
        }
        j++;
        i = 0;
        continue;
    } return numbersArray;
};

module.exports = removeFromArray;

// function getNums(numbersArray, ...numsToDelete) {
//     let toDeleteLen = numsToDelete.length;
//     let numbersLen = numbersArray.length;
//     i = 0;
//     j = 0;
//     while (j < toDeleteLen) {
//         while (i < numbersLen) {
//             if (numbersArray[i] === numsToDelete[j]) {
//                 removeNum = numbersArray.indexOf(numsToDelete[j]);
//                 numbersArray.splice(removeNum,1);
//                 i = 0;
//                 // j++;
//                 break;
//             } else {
//                 i++;
//             }
//         }
//         j++;
//         i = 0;
//         continue;
//     } return numbersArray;
// };

// console.log(getNums([1, 2, 3, 4], 7, "tacos"))

