'use strict';

//Arrow functions are always anonymous
//arrow functions explicitly return the parameters if just one
var square = function square(x) {
  return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//   return x * x
// }

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(9));

//Challenge
// const firstName = (x) => {
//   return x.split(' ')[0]
// }

var firstName = function firstName(name) {
  return name.split(' ')[0];
};
console.log(firstName('Dapo Junior'));
