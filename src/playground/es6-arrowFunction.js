//Arrow functions are always anonymous
//arrow functions explicitly return the parameters if just one
const square = function (x) {
  return x * x
}

console.log(square(8))

// const squareArrow = (x) => {
//   return x * x
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(9))

//Challenge
// const firstName = (x) => {
//   return x.split(' ')[0]
// }

const firstName = (name) => name.split(' ')[0]
console.log(firstName('Dapo Junior'))
