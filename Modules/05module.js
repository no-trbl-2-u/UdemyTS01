"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mammel = /** @class */ (function () {
    function Mammel(name, username) {
        this.username = username;
        // __protected__ means it can NOT be targetted outside the class
        // *** BUT *** it CAN be targetted in an inherited class
        this.age = 27;
        // Property defined here based on constructor
        this.name = name;
        /*
          this.username = username
            Unnecassary because the __declaration__ &&
            __definition__ is in the constructor parameters
        */
    }
    Mammel.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Doggy");
    };
    Mammel.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Mammel;
}());
var doggy = new Mammel("Dog", "doggyUser");
// console.log(doggy)
// doggy.printAge();
//__________________________________________________________________
// Inheritance
var Dolphin = /** @class */ (function (_super) {
    __extends(Dolphin, _super);
    // __properties__ inside of the class definition not only bypass the Mammel
    // definition, but also the constructor from Mammel
    // name = "dolphyInside"
    function Dolphin(username) {
        var _this = _super.call(this, "dolphyInside", username) || this;
        // __private__
        // age is a property from the parent class that CAN be targetted
        _this.age = 31;
        return _this;
        // __protected__
        // Property 'type' is private and only accessible within class 'Mammel'
        // this.type = "dolphin" // !ERROR! 
    }
    return Dolphin;
}(Mammel));
var max = new Dolphin("dolphyUser");
// console.log(max)
//__________________________________________________________________________
// Getters and Setters
/*
  Instead of calling the __getter__ and __setter__ methods directly,
  you get and set like you would normally, BUT by
  writing these getters and setters, you can create rules
  and procedures for class manipulation
*/
var Plant = /** @class */ (function () {
    function Plant() {
        // props
        this._species = "Default Value";
    }
    Object.defineProperty(Plant.prototype, "species", {
        // __getter__
        get: function () {
            return this._species;
        },
        // __setter__
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var dandy = new Plant();
dandy.species = "RE"; // Doesn't pass __setter_ rules
// console.log(dandy.species) // Default Value
dandy.species = "Dandelion";
// console.log(dandy.species) // Dandelion
// ________________________________________________________
// Static Properties and Methods
/*
  The __static__ keyword allows you to use properties and methods
  WITHOUT instantiating the class that holds them
*/
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.145;
    return Helpers;
}());
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
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
    }
    // normal methods can be called and used by child classes
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
// EXAMPLE
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var itProject = new ITProject();
// console.log(itProject.projectName) // Default
itProject.changeName("IT Project");
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
var OnlyOne = /** @class */ (function () {
    // CAN NOT be instantiatied OUTSIDE of the class definition
    function OnlyOne(name) {
        this.name = name;
    }
    // !instance ? make one : return it.
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One') // !ERROR!
var right = OnlyOne.getInstance();
console.log(right.name); // 'The Only One'
// Cannot assign to 'name' because it is a read-only property.
// right.name = "New Name"
//__________________________________________________________________
