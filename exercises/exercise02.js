// ES6 exercises

// 01. Arrow Functions
const double = value => value * 2
// console.log(double(10)) // 20

// 02. Default Value
const greet = (name="Max") => {
  console.log(name)
}
// greet()     // Max
// greet("TJ") // TJ

// 03. Spread Operator
let numbers = [-3, 33, 38, 5]
// console.log(Math.min(...numbers)) // 3


// 04. Spread Operator (cont.)
let newArray = [55, 20]
let final = [...numbers, ...newArray]
// console.log(final) // [-3, 33, 38, 5, 55, 20]

// 05. Array Destructuring
let testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults
// console.log(result1, result2, result3) // 3.89 2.99 1.38

// 06. Object Destructuring
var scientist = {firstName: "Will", experience: 12};
const { firstName, experience }  = scientist
// console.log(firstName, experience) // Will 12