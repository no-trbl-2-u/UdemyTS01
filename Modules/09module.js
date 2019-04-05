"use strict";
// Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Attaching a decorator to a class will
// only get one argument, the constructor
// log entire constructorFN
function logged(constructorFN) {
    console.log(constructorFN.toString());
}
var DecPerson = /** @class */ (function () {
    function DecPerson() {
        console.log('Inside the Constructor');
    }
    DecPerson = __decorate([
        logged
    ], DecPerson);
    return DecPerson;
}());
// let DecTJ = new DecPerson()
//_______________________________________________________________
// Factories
function logging(value) {
    return value ? logged : null;
}
// Expression based decorators
var DecCar = /** @class */ (function () {
    function DecCar() {
    }
    DecCar = __decorate([
        logging(false) //true? returns FN; false? returns null
    ], DecCar);
    return DecCar;
}());
//_______________________________________________________________
// Advanced
// Any class/constructor w/ this constructor will have an
// added method attached called 'print'
function printable(constructorFN) {
    constructorFN.prototype.print = function () {
        console.log(this);
    };
}
var DecPlant = /** @class */ (function () {
    function DecPlant() {
        this.name = 'My Plant';
    }
    DecPlant = __decorate([
        logging(false),
        printable
    ], DecPlant);
    return DecPlant;
}());
// For EVERY class, there is an implicit constructor().
// Because of this, the decorator still applies to the constructor().
var myPlant = new DecPlant();
myPlant.print(); // DecPlant {name: 'My Plant'}
// _________________________________________________________________
// Decorators on Methods
// Decorators on Properties
// For more on how this works:
// MDN's Object.defineProperty() -- (_, _, descriptor) = config of object
// TSLang's documentation on Decorators
// Decorator taking advantage of __descriptor__ in Object.defineProperty
function editable(value) {
    // target = any; because if method is...
    // __static__ - target = constructor
    // __instantiated__ - target = prototype of the object
    return function (target, propName, descriptor) {
        descriptor.writable = value; // arg from parent function
    };
}
// FLAWED: example of property decorator to set rules on property assignment
function overwriteable(value) {
    return function (target, propName) {
        // Create new Property Descriptor and pass along a config Object
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var MyProject = /** @class */ (function () {
    function MyProject(name) {
        this.projectName = name;
    }
    MyProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwriteable(true)
    ], MyProject.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], MyProject.prototype, "calcBudget", null);
    return MyProject;
}());
var proj = new MyProject('Decorators');
// proj.calcBudget() // 1000
// proj is only editable if @editable(true)
// will throw ERROR
// proj.calcBudget = function () {
//   console.log(2000)
// }
// proj.calcBudget() // 2000 if @editable(true) | 1000
proj.projectName = 'New Name';
console.log(proj.projectName); // New Name
