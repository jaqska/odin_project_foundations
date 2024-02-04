const reverseString = function(textString) {
    let lenTextString = textString.length;
    let reversedString = '';
    for (let i = lenTextString - 1; i >=0; i--) {
        reversedString += textString[i];
    }
    return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
