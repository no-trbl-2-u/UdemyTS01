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
        // __protected__ means it can not be targetted outside the class
        // *** BUT *** it CAN be targetted in an inherited class
        this.age = 27;
        // Property defined here based on constructor
        this.name = name;
        // Unnecassary because the 
        // __declaration__ && __definition__ is in the constructor parameters
        // ### this.username = username ### 
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
console.log(doggy);
doggy.printAge();
//__________________________________________________________________
// Inheritance
var Dolphin = /** @class */ (function (_super) {
    __extends(Dolphin, _super);
    // __properties__ inside of the class definition not only bypass the Mammel
    // definition, but also the constructor from Mammel
    // name = "dolphyInside"
    function Dolphin(username) {
        var _this = _super.call(this, "dolphyInside", username) || this;
        _this.age = 31;
        return _this;
        // this.type = "dolphin" -- Property 'type' is private and only accessible within class 'Mammel'
    }
    return Dolphin;
}(Mammel));
var max = new Dolphin("dolphyUser");
console.log(max);
