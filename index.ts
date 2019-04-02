// Utilities
// ###################################
// Create <br>
function breakPage () : string {
  return "<br><br>"
}
// Write element to page
function write(type:string, ele:string){
  document.write(type)
  document.write(": ")
  document.write(ele)
  document.write(" ")
}
// ###################################
//__________________________________________

// string
const str: string = "This should be a string"
write("string", str)
write("", breakPage())
//___________________________________________

// number
const num: number = 25
write("This should be a num", String(num))
write("", breakPage())
//___________________________________________

// array
let hobbies: string[] = ["Cooking", "Sports"]
hobbies.forEach((ea:string) => write("element of Array", ea + "."))
write("", breakPage())
// ___________________________________________

// tuples (Fixed value format)
let address: [string, number] = ["Str", 45]
address.forEach(ea => 
  write("element of Tuple", String(ea + "."))
)
write("", breakPage())
//____________________________________________

// enums (each num stands for a value)
// enum (assignment)
enum Color {
  red,   // 0
  white, // 1
  blue   // 2
}
// enum (assignment usage)
let myColor:Color = Color.blue
write("enum - Color value", String(myColor))
write("", breakPage())
//_____________________________________________

// any
let carAny: any = "BMW"
carAny = {brand: "BMW", series: 3} // Error w/o any
write("any type", carAny.brand)
write("any type", carAny.series)
write("", breakPage())
//_____________________________________________

// functions            | basic Usage |
//                (arg Type)      : return Type
function returnStr(aString:string): string{
  return aString
}
write("function call", returnStr(str))
write("", breakPage());

// function (void) --Must have ^semi-colon^ for IIFE
(function saySomething(): void{
  write("function returns void", "*void*" )
})();
write("", breakPage())

// functions (argument typing)
function addSome(num1:number, num2: number):number{
  return num1 + num2
}
write("function with types", String(addSome(5, 10)))
write("", breakPage())

// function types
let myAddSome: (val1: number, val2: number) => number;
// myAddSome = write // (Will cause an error)
// myAddSome("function reinitialization", "Now impossible")
myAddSome = addSome // Works just fine
write(
  "function assignment aligns w/ function type",
  "(val1: number, val2: number) => number"
)
write("", breakPage())
// _______________________________________________

// objects
// implicit typing
let userData = {
  name: "TJ",
  age: 29
}
// userData = {} // ERROR

// explicit typing w/o interface
let userData2: {name: string, age: number} = {
  name: "kata",
  age: 29
}
// userData2 = {} // ERROR
userData2.name = "kathleen"
write("Object: name of userData2", userData2.name)
write("", breakPage())

// interface for objects (can live in outside module)
interface IuserData {
  name: string
  age: number
}
let typedUserData: IuserData = {
  name: "TJ",
  age: 29
}
write("Object w/ interface: name", typedUserData.name)
write("", breakPage())

// COMPLEX object
//             |     prop    |,  |    method w/ type signature  |
let complexObj:{nums: number[], output: (all: boolean) => number[] } = {
  nums: [1, 2, 3],
  output: function(all: boolean): number[] {
    return all ? this.nums : this.nums.reverse()
  } 
}
write("complex Object method call", String(complexObj.output(false)))
write("", breakPage())

// Complex 2 (Very similiar Complex Object)
// type (Type Aliases)
type Complex = {nums: number[], output: (all: boolean) => number[] }

let complexObj2: Complex = {
  nums: [1, 2, 3],
  output: function(all: boolean): number[] {
    return all ? this.nums : this.nums.reverse()
  } 
}
//__________________________________________________________________

// Union Types
let myRealAge: number | string = 29
myRealAge = "29"
// myRealAge = true // ERROR
//___________________________________________________________________

// check types (@runtime)
let finalValue: string | number | boolean = true //<-- Change value here
if(typeof finalValue === 'string'){
  write("finalValue is a string", finalValue)
}
if(typeof finalValue === 'number'){
  write("finalValue is a number", String(finalValue))
}
if(typeof finalValue === 'boolean'){
  write("finalValue is a boolean", String(finalValue))
}
//_____________________________________________________________________

// TS language 2.0+

// never type (used to represent a type where something will _never_ return)
function neverReturns():never {
  throw new Error('An Error!')
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null // ERROR if no "...|null"
let canAlsoBeNull: null; // or _untyped_ or _any_
canAlsoBeNull = null

let canThisBeAny = null
canThisBeAny = 12

write("null type", String(canAlsoBeNull))