const palindromes = function (word) {
    word = word.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let originalWord = Array.from(word);
    let originalString = "";
    let letters = Array.from(alphabet);
    let reverseWord = "";
    let i = word.length-1;
    while (i >= 0) {
        if (letters.includes(originalWord[i])) {
            reverseWord += originalWord[i];
            i--;
        } else {
            i--;
        }
    }
    while (i <= word.length) {
        if (letters.includes(originalWord[i])) {
            originalString += originalWord[i];
            i++;
        } else {
            i++;
        }
    }
    if (reverseWord == originalString) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes;
