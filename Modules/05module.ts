class Mammel {
  // Property declared here...Must be included in constructor
  name: string;

  // __private__ means it can not be targetted outside the class
  private type!: string;
  
  // __protected__ means it can not be targetted outside the class
  // *** BUT *** it CAN be targetted in an inherited class
  protected age: number = 27;

  constructor(name: string, public username: string){
    // Property defined here based on constructor
    this.name = name;

    // Unnecassary because the 
    // __declaration__ && __definition__ is in the constructor parameters
    // ### this.username = username ### 
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
console.log(doggy)
doggy.printAge();

//__________________________________________________________________

// Inheritance
class Dolphin extends Mammel{
  // __properties__ inside of the class definition not only bypass the Mammel
  // definition, but also the constructor from Mammel
  // name = "dolphyInside"

  constructor(username: string){
    super("dolphyInside", username);
    this.age = 31
    // this.type = "dolphin" -- Property 'type' is private and only accessible within class 'Mammel'
  }
}

const max = new Dolphin("dolphyUser");
console.log(max)