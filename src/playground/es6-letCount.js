//var can be reassign and redefined
//let can be reassigned but not redefined
//const cannot be redefined or reassigned


//All three are function scoped

//let and const are blocked scoped, they do not function outside the curly bracket
var Place = 'San Francisco'
var Place = 'New York'
console.log(Place)

let animal = 'Lion'
let animal = 'tiger'
console.log(animal)

const name = 'Wale Olakareem'
console.log(name)

