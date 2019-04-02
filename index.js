"use strict";
// Utilities
// ###################################
// Create <br>
function breakPage() {
    return "<br><br>";
}
// Write element to page
function write(type, ele) {
    document.write(type);
    document.write(": ");
    document.write(ele);
    document.write(" ");
}
// ###################################
//__________________________________________
// string
var str = "This should be a string";
write("string", str);
write("", breakPage());
//___________________________________________
// number
var num = 25;
write("This should be a num", String(num));
write("", breakPage());
//___________________________________________
// array
var hobbies = ["Cooking", "Sports"];
hobbies.forEach(function (ea) { return write("element of Array", ea + "."); });
write("", breakPage());
// ___________________________________________
// tuples (Fixed value format)
var address = ["Str", 45];
address.forEach(function (ea) {
    return write("element of Tuple", String(ea + "."));
});
write("", breakPage());
//____________________________________________
// enums (each num stands for a value)
// enum (assignment)
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["white"] = 1] = "white";
    Color[Color["blue"] = 2] = "blue"; // 2
})(Color || (Color = {}));
// enum (assignment usage)
var myColor = Color.blue;
write("enum - Color value", String(myColor));
write("", breakPage());
//_____________________________________________
// any
var car = "BMW";
car = { brand: "BMW", series: 3 }; // Error w/o any
write("any type", car.brand);
write("any type", car.series);
write("", breakPage());
//_____________________________________________
// functions            | basic Usage |
//                (arg Type)      : return Type
function returnStr(aString) {
    return aString;
}
write("function call", returnStr(str));
write("", breakPage());
// function (void) --Must have ^semi-colon^ for IIFE
(function saySomething() {
    write("function returns void", "*void*");
})();
write("", breakPage());
// functions (argument typing)
function addSome(num1, num2) {
    return num1 + num2;
}
write("function with types", String(addSome(5, 10)));
write("", breakPage());
// function types
var myAddSome;
// myAddSome = write // (Will cause an error)
// myAddSome("function reinitialization", "Now impossible")
myAddSome = addSome; // Works just fine
write("function assignment aligns w/ function type", "(val1: number, val2: number) => number");
write("", breakPage());
// _______________________________________________
// objects
// implicit typing
var userData = {
    name: "TJ",
    age: 29
};
// userData = {} // ERROR
// explicit typing w/o interface
var userData2 = {
    name: "kata",
    age: 29
};
// userData2 = {} // ERROR
userData2.name = "kathleen";
write("Object: name of userData2", userData2.name);
write("", breakPage());
var typedUserData = {
    name: "TJ",
    age: 29
};
write("Object w/ interface: name", typedUserData.name);
write("", breakPage());
// COMPLEX object
//             |     prop    |,  |    method w/ type signature  |
var complexObj = {
    nums: [1, 2, 3],
    output: function (all) {
        return all ? this.nums : this.nums.reverse();
    }
};
write("complex Object method call", String(complexObj.output(false)));
write("", breakPage());
var complexObj2 = {
    nums: [1, 2, 3],
    output: function (all) {
        return all ? this.nums : this.nums.reverse();
    }
};
//__________________________________________________________________
// Union Types
var myRealAge = 29;
myRealAge = "29";
// myRealAge = true // ERROR
//___________________________________________________________________
// check types (@runtime)
var finalValue = true; //<-- Change value here
if (typeof finalValue === 'string') {
    write("finalValue is a string", finalValue);
}
if (typeof finalValue === 'number') {
    write("finalValue is a number", String(finalValue));
}
if (typeof finalValue === 'boolean') {
    write("finalValue is a boolean", String(finalValue));
}
//_____________________________________________________________________
// TS language 2.0+
// never type (used to represent a type where something will _never_ return)
function neverReturns() {
    throw new Error('An Error!');
}
// Nullable types
var canBeNull = 12;
canBeNull = null; // ERROR if no "...|null"
var canAlsoBeNull; // or _untyped_ or _any_
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
write("null type", String(canAlsoBeNull));
