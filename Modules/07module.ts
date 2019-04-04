// Interfaces

/* 
  Contracts that declare mandatory properties and their types.
  They are open for extension, as in, you can have properties
  that are not included in the interface, but you MUST have
  the properties that ARE included in the interface.
  
  prop                           = mandatory
  prop?                          = optional
  [prop]                         = flexible
  method(arg: type): return type = mandatory
*/

interface INamedPerson {
  // Mandatory
  firstName: string
  age: number
  
  // optional
  optionalArg? : string

  // Flexible Property (not Mandatory)(no preset [key]val)
  [propName: string]: any;

  // Method signatures
  greet(lastName: string): void;
}

function greet(person: INamedPerson): void {
  console.log(`Hello ${person.firstName}`)
}

function changeName(person: INamedPerson): void {
  person.firstName = "TJ"
}

// Object Literal using interface contract
let person: INamedPerson = {
  // Mandatory
  firstName: "Max",
  age: 29,

  // Optional
  optionalArg: "Optional Argument",

  // Flexible
  hobbies: ["Coding"],

  // Method containing EXACT type sig from interface
  greet(lastName: string): void {
    console.log(`Hello, ${this.firstName} ${lastName}`) // Hello, TJ Allen
  } 
}

// console.log(person.firstName) // Max
changeName(person)
// console.log(person.firstName) // TJ
// person.greet("Allen")
// _________________________________________________________________________

// Interfaces in Classes

class NamedPersonClass implements INamedPerson{
  firstName: string =  "TJ"
  lastNameProp: string = "AllenProp" // NoError (Can extend)
  age: number = 29
  greet(lastName: string){
    console.log(`Hello, ${this.firstName} ${lastName}`) // Hello, TJ Allen
  }
}

let tjClass = new NamedPersonClass()
// tjClass.greet("Allen")
// _________________________________________________________________________

// Function Typing

interface IDoubleValueFunc {
  (number1: number, number2: number): number;
}

const myDoubleValueFunc: IDoubleValueFunc =
  (val: number, val2: number) => (val + val2) * 2

// console.log(myDoubleValueFunc(10, 20))
// ___________________________________________________________________________

// Interface Inheritance

interface NoOptionalArg extends INamedPerson{
  // Optional in parent
  optionalArg: string;
}

const noOptionalArg: NoOptionalArg = {
  firstName: "Max",
  age: 25,

  // Not optional in inherited
  optionalArg: "No Longer Optional",
  
  greet(lastName: string){
    console.log(`Hello, ${this.firstName} ${lastName}`)
  }
}

// noOptionalArg.greet("a-million") // Hello, Max a-million