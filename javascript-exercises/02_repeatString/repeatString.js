const repeatString = function(inputText, numberOfRepeats) {
    if (numberOfRepeats < 0) {
        return 'ERROR';
    }
    resultText = ''
    for (let i=0; i < numberOfRepeats; i ++) {
        resultText += inputText;
    }
    return resultText;
};


// Do not edit below this line
module.exports = repeatString;
