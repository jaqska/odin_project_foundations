function myFirstFunction(a, b){
    console.log(a + ' ' + b);
}

myFirstFunction('hey', 'you');

function trueOrFalse(isItTrue) {
    if (isItTrue) {
        return console.log('Yes, it is true.');
    }
    return console.log('No, it is false');
}

trueOrFalse(false);


function add7 (number) {
    let addedNumber = number + 7;
    return addedNumber;
}

console.log(add7(3));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2,3));


function capitalize(text) {
    let firstLetter = text.charAt(0);
    let firstLetterUpper = firstLetter.toUpperCase();
    let restWord = text.slice(1);
    let resWord = firstLetterUpper + restWord;
    return resWord;
}

console.log(capitalize('hello'));

function getLastLetter(text) {
    let lenText = text.length;
    let lastLetter = text.charAt(lenText - 1);
    return lastLetter;
}

console.log(getLastLetter('hello there you'));

