let myArray = ['John', 23];

// nested array

let nestedArray = [[3,45,2], 4, [4,5,6,7]];

nestedArray[0][0] = 34;

let outArray = ['dog', 'cat', 'elephant'];

outArray.push(['happy', 'depressed']);

let removedFromOurArray = outArray.pop();

removedFirstElement = nestedArray.shift();

let cars = ['toyota', 'bentley', 'mercedes'];

cars.unshift(['tesla', 'wolkswagen']);

console.log(myArray);
console.log(nestedArray);
console.log(outArray);
console.log(removedFromOurArray);
console.log(removedFirstElement);
console.log(cars);