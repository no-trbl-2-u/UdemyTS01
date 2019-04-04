"use strict";
// Interfaces
function greet(person) {
    console.log("Hello " + person.firstName);
}
function changeName(person) {
    person.firstName = "TJ";
}
// Object Literal using interface contract
var person = {
    // Mandatory
    firstName: "Max",
    age: 29,
    // Optional
    optionalArg: "Optional Argument",
    // Flexible
    hobbies: ["Coding"],
    // Method containing EXACT type sig from interface
    greet: function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName); // Hello, TJ Allen
    }
};
// console.log(person.firstName) // Max
changeName(person);
// console.log(person.firstName) // TJ
// person.greet("Allen")
// _________________________________________________________________________
// Interfaces in Classes
var NamedPersonClass = /** @class */ (function () {
    function NamedPersonClass() {
        this.firstName = "TJ";
        this.lastNameProp = "AllenProp"; // NoError (Can extend)
        this.age = 29;
    }
    NamedPersonClass.prototype.greet = function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName); // Hello, TJ Allen
    };
    return NamedPersonClass;
}());
var tjClass = new NamedPersonClass();
var myDoubleValueFunc = function (val, val2) { return (val + val2) * 2; };
var noOptionalArg = {
    firstName: "Max",
    age: 25,
    // Not optional in inherited
    optionalArg: "No Longer Optional",
    greet: function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    }
};
// noOptionalArg.greet("a-million") // Hello, Max a-million
