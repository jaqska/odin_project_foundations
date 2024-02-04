/*
Data types:
undefined, null, boolean, string, symbol, number and object
*/

const FIRST_NAME = 'Alex';

const LAST_NAME = 'Summer';

const BIRTHDAY = '01.01.1999';

let age = 27;

let sum = 32 + 89;

let divided = 24 / 7;

let incremented = sum ++;

let decremented = sum --;

let decimal = 5.445;

let product = decimal * 5;

let remainder = product % 3;

let a = 12;

let b = a += 9;

let myStr = 'I am a \'string\' inside a string';

let formatted = 'Hello!\n\tNice to meet you\nWho are you?\\';

let outStr = 'I come first' + '\nI come second';

let lenChar = outStr.length;

let firstLetter = outStr[0];

/* Note. Can't change letter doing this: firstLetter[0] = 'H'; 
Strings are immutable */

let lastLetterFirstName = FIRST_NAME[FIRST_NAME.length -1];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    let result = '';
    result += 'The ' + myAdjective + ' ' + myNoun + ' ' +  myVerb + ' to the store ' + ' ' + myAdverb + '.'
    return result;
}

console.log(age);
console.log(sum);
console.log(divided);
console.log(incremented);
console.log(decremented);
console.log(product);
console.log(remainder);
console.log(b);
console.log(myStr);
console.log(formatted);
console.log(outStr);
console.log(lenChar);
console.log(firstLetter);
console.log(lastLetterFirstName);
console.log(wordBlanks('dog','small', 'jump', 'slowly'));

