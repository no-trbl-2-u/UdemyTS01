// Exercise 1 - How was your TypeScript Class?
class Car{
  public name: string;
  public acceleration: number

  constructor(name: string){
    this.name = name;
    this.acceleration = 0;
  }

  honk(): void{
    console.log("Toooooooooot!");
  };

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}
const car = new Car("BMW");
// car.honk();
// console.log(car.acceleration); // 0
car.accelerate(10);
// console.log(car.acceleration); // 10
//_______________________________________________________________

// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject{
  width:  number = 0;
  length: number = 0;
};

class Rectangle extends BaseObject{
  width = 25;
  length = 10;

  calcSize() {
    return this.width * this.length;
  };
}
const rectangle = new Rectangle()
// console.log(rectangle.calcSize());
//_______________________________________________________________

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Duders {
  _firstName: string =  "Default Value"

  get firstName() {
    return this._firstName;
  }
  
  set firstName(value) {
    if (value.length > 3) {
        this._firstName = value;
    }
    else {
        this._firstName = "Try Again";
    }
  }

};

const dude = new Duders()

console.log(dude.firstName); // Default Value

dude.firstName = "Ma";
console.log(dude.firstName); // Try Again

dude.firstName = "Maximilian";
console.log(dude.firstName); // Maximilian
//___________________________________________