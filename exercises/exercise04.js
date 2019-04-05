"use strict";
// Let's keep it simple and only add the following methods to the Map:
// setItem(key: string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.collection = {};
    }
    MyMap.prototype.getItem = function (key) {
        return this.collection[key];
    };
    MyMap.prototype.setItem = function (key, item) {
        this.collection[key] = item;
    };
    MyMap.prototype.clear = function () {
        this.collection = {};
    };
    MyMap.prototype.printMap = function () {
        for (var item in this.collection) {
            console.log(item, this.collection[item]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap);
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
