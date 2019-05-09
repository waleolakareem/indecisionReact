//arrow function - no longer bound with arrow function

// function add(x,y) {
//   console.log(arguments)
//   return x + y
// }
// const add = (x,y) => {
//   console.log(arguments)
//   return x + y
// }

// console.log(add(5,6,7,8))
// this keyword - no longer bound

const user = {
  name: 'Wale Olakareem',
  locations: ['minneapolis','San Francisco', 'Apple Valley'],
  printoutname() {
    return this.locations.map((city) => this.name + " this is my " + city)
  }
}
  console.log(user.printoutname())

const multiplier = {
  multiplyBy :8,
  numbers: [2,3,4,6],
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

  console.log(multiplier.multiply())






