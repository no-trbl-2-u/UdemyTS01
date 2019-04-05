"use strict";
// Generics
// Simple Generic
function echo(data) {
    return data;
}
// console.log(echo("Max").length) // length is NOT part of intelliSense
// console.log(echo(27).length) // undefined (doesn't have .length)
//___________________________________________________________________
// Better Generic
function betterEcho(data) {
    return data;
}
// console.log(echo("Max").length) // length IS part of intelliSense
// console.log(echo<number>(10)) // set type of arg in function call 
// console.log(echo<IGuy>({name: "Max", age: 27}))
// ___________________________________________________________________
// Built-in Generics
// Array<__type__> can be used in decleration
var testResults = [4, 5, 3, 4];
// testResults.push("TJ") // ERROR for type Clashing
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
// Array<__type__> can be used in function call 
// printAll<string>(["Apple", "Banana"]) // Apple, Banana
//____________________________________________________________________
// Generic Types
//  | name |  gen in | gen out | value
var echo2 = betterEcho;
// console.log(echo2<string>("TJ")) // TJ
// console.log(echo2<number>(29))   // 29
//____________________________________________________________________
// Generic Classes
var simpleMath = /** @class */ (function () {
    function simpleMath() {
    }
    simpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // "+"to set to number
    };
    return simpleMath;
}());
var maths = new simpleMath();
maths.baseValue = "10"; // No Error
maths.multiplyValue = 20;
// console.log(maths.calculate()) // 200
// maths.baseValue = "String" // Compile error IF <T extends __type__>
console.log(maths.calculate()); // NaN (No compile Errors)
