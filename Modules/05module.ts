class Mammel {
  // Property declared here...
  // Must be included in constructor
  // OR a default value must be provided
  name: string;

  // __private__ means it can NOT be targetted outside the class
  private type!: string; // the "!" is to quiet the compiler
  
  // __protected__ means it can NOT be targetted outside the class
  // *** BUT *** it CAN be targetted in an inherited class
  protected age: number = 27;

  constructor(name: string, public username: string){
    // Property defined here based on constructor
    this.name = name;
    
  /*
    this.username = username
      Unnecassary because the __declaration__ &&
      __definition__ is in the constructor parameters
  */ 
  }

  printAge() {
    console.log(this.age);
    this.setType("Old Doggy")
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const doggy = new Mammel("Dog", "doggyUser")
// console.log(doggy)
// doggy.printAge();

//__________________________________________________________________

// Inheritance
class Dolphin extends Mammel{
  // __properties__ inside of the class definition not only bypass the Mammel
  // definition, but also the constructor from Mammel
  // name = "dolphyInside"

  constructor(username: string){
    super("dolphyInside", username);
    
    // __private__
    // age is a property from the parent class that CAN be targetted
    this.age = 31 
    
    // __protected__
    // Property 'type' is private and only accessible within class 'Mammel'
    // this.type = "dolphin" // !ERROR! 
  }
}

const max = new Dolphin("dolphyUser");
// console.log(max)
//__________________________________________________________________________

// Getters and Setters

/*
  Instead of calling the __getter__ and __setter__ methods directly,
  you get and set like you would normally, BUT by
  writing these getters and setters, you can create rules
  and procedures for class manipulation 
*/

class Plant {
  // props
  private _species: string = "Default Value";

  // __getter__
  get species() {
    return this._species
  }

  // __setter__
  set species(value: string) {
    if(value.length > 3){
      this._species = value  
    }
  }
}

const dandy = new Plant()
dandy.species = "RE" // Doesn't pass __setter_ rules
// console.log(dandy.species) // Default Value

dandy.species = "Dandelion"
// console.log(dandy.species) // Dandelion
// ________________________________________________________

// Static Properties and Methods

/*
  The __static__ keyword allows you to use properties and methods
  WITHOUT instantiating the class that holds them
*/

class Helpers {
  static PI: number = 3.145;
  
  static calcCircumference(diameter: number): number {
    return this.PI * diameter
  }
}

// console.log(Helpers.calcCircumference(100)) // 314.5
// console.log(Helpers.PI) // 3.145
//______________________________________________________________

// Abstract Classes
/* 
  Abstract Classes CAN NOT be instantiated directly.
  They can ONLY be inherited from. Maybe the class
  NEVER NEEDS to be instantiated, but can hold 
  properties and methods that all your child 
  classes will need. Great for a __BLUEPRINT__ of a class
  you'd like to create/inherit from.
*/

abstract class Project {
  projectName: string = "Default";
  budget!: number;

  // abstract method doesn't define the method.
  // It only defines the type for the child method
  abstract changeName(name: string): void;

  // normal methods can be called and used by child classes
  calcBudget() {
    return this.budget * 2
  }
}

// EXAMPLE
class ITProject extends Project {
  changeName(name: string) {
    this.projectName = name
  }
}

const itProject = new ITProject()
// console.log(itProject.projectName) // Default
itProject.changeName("IT Project")
// console.log(itProject.projectName) // IT Project 
//_______________________________________________________

// Private Constructors, Singleton Classes, readonly

/*
  Singleton Classes will allow you to have only one instance
  during runtime. The __private construtor__ allows you to
  enforce that and stops you from using the __new__ keyword.
  You can only use the __new__ keyword from INSIDE the class
  definition. __readonly__ property allows you to have
  immutable properties within your class. ***Note*** __readonly__
  CAN NOT be declared inside of the constructor parameters.
  That shorthand is not allowed.
*/

class OnlyOne {
  // The instantiation of the class is of Type...this class!
  private static instance: OnlyOne;

  // readonly
  public readonly name: string;

  // CAN NOT be instantiatied OUTSIDE of the class definition
  private constructor(name: string) {
    this.name = name;
  }

  // !instance ? make one : return it.
  static getInstance() {
    if(!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance
  }
}

// let wrong = new OnlyOne('The Only One') // !ERROR!
let right = OnlyOne.getInstance()
console.log(right.name) // 'The Only One'

// Cannot assign to 'name' because it is a read-only property.
// right.name = "New Name"

//__________________________________________________________________