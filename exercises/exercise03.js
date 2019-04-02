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
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration); // 0
car.accelerate(10);
// console.log(car.acceleration); // 10
//_______________________________________________________________
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 25;
        _this.length = 10;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    ;
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
// console.log(rectangle.calcSize());
//_______________________________________________________________
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Duders = /** @class */ (function () {
    function Duders() {
        this._firstName = "Default Value";
    }
    Object.defineProperty(Duders.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "Try Again";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Duders;
}());
;
var dude = new Duders();
console.log(dude.firstName); // Default Value
dude.firstName = "Ma";
console.log(dude.firstName); // Try Again
dude.firstName = "Maximilian";
console.log(dude.firstName); // Maximilian
//___________________________________________
