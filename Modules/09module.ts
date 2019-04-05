// Decorators

// Attaching a decorator to a class will
// only get one argument, the constructor

// log entire constructorFN
function logged(constructorFN: Function) {
  console.log(constructorFN.toString());
}

@logged
class DecPerson {
  constructor() {
    console.log('Inside the Constructor');
  }
}
// let DecTJ = new DecPerson()
//_______________________________________________________________

// Factories

function logging(value: boolean): any {
  return value ? logged : null;
}

// Expression based decorators
@logging(false) //true? returns FN; false? returns null
class DecCar {}
//_______________________________________________________________

// Advanced

// Any class/constructor w/ this constructor will have an
// added method attached called 'print'
function printable(constructorFN: Function) {
  constructorFN.prototype.print = function() {
    console.log(this);
  };
}

@logging(false)
@printable
class DecPlant {
  name: string = 'My Plant';
}

// For EVERY class, there is an implicit constructor().
// Because of this, the decorator still applies to the constructor().

const myPlant = new DecPlant();
(myPlant as any).print(); // DecPlant {name: 'My Plant'}

// _________________________________________________________________

// Decorators on Methods
// Decorators on Properties

// For more on how this works:
// MDN's Object.defineProperty() -- (_, _, descriptor) = config of object
// TSLang's documentation on Decorators

// Decorator taking advantage of __descriptor__ in Object.defineProperty
function editable(value: boolean) {
  // target = any; because if method is...
  // __static__ - target = constructor
  // __instantiated__ - target = prototype of the object
  return (target: any, propName: string, descriptor: PropertyDescriptor) => {
    descriptor.writable = value; // arg from parent function
  };
}

// FLAWED: example of property decorator to set rules on property assignment
function overwriteable(value: boolean): any {
  return (target: any, propName: string) => {
    // Create new Property Descriptor and pass along a config Object
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class MyProject {
  // if false, will stop ALL assignment to prop
  @overwriteable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

let proj = new MyProject('Decorators');
// proj.calcBudget() // 1000

// proj is only editable if @editable(true)
// will throw ERROR
// proj.calcBudget = function () {
//   console.log(2000)
// }
// proj.calcBudget() // 2000 if @editable(true) | 1000

proj.projectName = 'New Name';
console.log(proj.projectName); // New Name
